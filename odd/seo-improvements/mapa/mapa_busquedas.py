#!/usr/bin/env python3
# mapa-de-busquedas · Busquedas reales de Google agrupadas por intencion
# (c) 2026 Palo Seco S.L. · https://palo-seco.com
import argparse, csv, html, json, os, re, sys, time, unicodedata
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import quote
import requests

S = requests.Session()
S.headers.update({"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36"})

PREFIJOS = {
    "es": ["cómo", "qué", "cuánto cuesta", "cuál es el mejor", "por qué", "dónde", "cuándo", "mejor", "precio"],
    "en": ["how", "what", "how much", "best", "why", "where", "when", "cost"],
}
SUFIJOS = {
    "es": ["precio", "cerca de mí", "opiniones", "urgente", "barato", "o", "vs", "para"],
    "en": ["price", "near me", "reviews", "cheap", "vs", "or", "for"],
}


def norm(s):
    s = unicodedata.normalize("NFKD", str(s)).encode("ascii", "ignore").decode().lower()
    return re.sub(r"\s+", " ", s).strip()


def suggest(q, hl, gl):
    url = f"https://suggestqueries.google.com/complete/search?client=firefox&hl={hl}&gl={gl}&q={quote(q)}"
    for intento in range(3):
        try:
            r = S.get(url, timeout=10)
            if r.status_code == 200:
                return [x for x in r.json()[1] if isinstance(x, str)]
            if r.status_code == 429: time.sleep(2 + intento * 2)
        except Exception:
            time.sleep(1)
    return None


def expand(a):
    cfg = json.load(open(a.semillas, encoding="utf-8"))
    semillas = list(dict.fromkeys(s.strip() for s in cfg["semillas"] if s.strip()))
    nucleo = [norm(x) for x in cfg.get("nucleo", [])] or [norm(cfg.get("negocio", ""))]
    hl, gl = a.hl, a.gl
    pre, suf = PREFIJOS.get(hl, PREFIJOS["en"]), SUFIJOS.get(hl, SUFIJOS["en"])
    consultas = []
    for s in semillas:
        consultas.append((s, s, "semilla"))
        for x in suf: consultas.append((f"{s} {x}", s, "sufijo"))
    for s in semillas[: a.alfabeto]:
        for c in "abcdefghijlmnoprstuv": consultas.append((f"{s} {c}", s, "letra"))
    for n in nucleo[:2]:
        for p in pre: consultas.append((f"{p} {n}", n, "prefijo"))
        if cfg.get("ciudad"):
            for p in pre[:5]: consultas.append((f"{p} {n} {cfg['ciudad']}", n, "prefijo"))
    consultas = list(dict.fromkeys(consultas))[: a.max_consultas]
    print(f"Consultando el autocompletado de Google: {len(consultas)} consultas...", file=sys.stderr)
    res, fallos = {}, 0
    with ThreadPoolExecutor(4) as ex:
        for (q, semilla, tipo), sug in zip(consultas, ex.map(lambda c: suggest(c[0], hl, gl), consultas)):
            if sug is None: fallos += 1; continue
            for s in sug:
                k = norm(s)
                if k not in res: res[k] = {"busqueda": s, "semilla": semilla, "veces": 0}
                res[k]["veces"] += 1
    nuc_tokens = {t for n in nucleo for t in n.split() if len(t) > 3}
    rel = [v for v in res.values() if not nuc_tokens or any(t in norm(v["busqueda"]) for t in nuc_tokens)]
    rel.sort(key=lambda v: (-v["veces"], v["busqueda"]))
    os.makedirs(a.out, exist_ok=True)
    out = {"negocio": cfg.get("negocio"), "ciudad": cfg.get("ciudad"), "idioma": hl, "pais": gl,
           "consultas_hechas": len(consultas), "consultas_fallidas": fallos,
           "total_sugerencias": len(res), "relevantes": len(rel), "sugerencias": rel}
    json.dump(out, open(os.path.join(a.out, "sugerencias.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(json.dumps({k: out[k] for k in ("consultas_hechas", "consultas_fallidas", "total_sugerencias", "relevantes")}, ensure_ascii=False))
    if fallos == len(consultas):
        print("AVISO: no se ha podido conectar con Google. Sin datos reales.", file=sys.stderr)


def main():
    ap = argparse.ArgumentParser()
    sp = ap.add_subparsers(dest="cmd", required=True)
    e = sp.add_parser("expand"); e.add_argument("semillas"); e.add_argument("--hl", default="es"); e.add_argument("--gl", default="es")
    e.add_argument("--alfabeto", type=int, default=3); e.add_argument("--max-consultas", type=int, default=400); e.add_argument("--out", default="mapa_out")
    a = ap.parse_args()
    expand(a)


if __name__ == "__main__":
    main()
