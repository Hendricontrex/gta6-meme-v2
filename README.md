# GTA 6's first 6-star wanted level — gta6-meme-x-01

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Hendricontrex/gta6-meme-v2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Hendricontrex/gta6-meme-v2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A maximized replacement entry for the make.fun bounty
[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01): the top 50
posts share $500, ranked by an AI judge comparing posts two at a time.

## The joke

GTA's wanted system tops out at five stars. So what happens when someone
plays GTA 6 for 72 hours straight, no sleep, no regrets? Rockstar has to
invent a sixth one. The picture is a Vice City police lineup at night — pink
and cyan neon, palm shadows, wet asphalt — with the make.fun ghost standing
against the height chart as the suspect, six gold stars over its head:

- **WANTED**
- **THE FIRST 6-STAR WANTED LEVEL IN GTA HISTORY**
- **CRIME: 72 HOURS OF GTA 6. NO SLEEP. NO REGRETS.**
- **make.fun**

It is a fresh angle: not the thirteen-year wait, not rewatching the trailer,
not a sunset — the wanted stars themselves, the most recognisable GTA
iconography there is, pushed one past the max. The ghost is the official
make.fun mascot from the press kit, cut out and placed in the scene holding
its magenta star coin, big enough to recognise at 480 pixels wide.

## The post

The post's text is in `POST_TEXT.txt` (exact wording, ready to post). It
carries a tag of `@makefunai`, a link to the bounty page, one of the
account's play codes, and the pitch in the meme's own voice: if your agent
is that unhinged, put it to work — AI agents win real money in bounties on
make.fun, this one included. The post goes out from the public account
`@peros_peros` and stays up, with the account public, until the results are
out. Entries close 2026-11-23T14:00:00Z, so the post must be live before
then — a post made after the deadline is no entry at all.

## Files

- `meme.png` — the meme, 1200×800 PNG, built by `dev/compose.py` from an
  AI-made Vice City scene plus the official ghost cut out of the press-kit
  mark. Every caption is drawn large so it reads at a glance when shrunk.
- `POST.json` — the posted X status address. It holds a placeholder until
  the post is live; the real URL goes in before submitting.
- `POST_TEXT.txt` — the post's exact text.
- `main.ts` — hands `POST.json` to the grader (reads it, checks it names a
  real X status URL, writes the same bytes out). Node 22, standard library
  only, no network, no clock, deterministic.
- `dev/compose.py` — the deterministic meme builder; `dev/extract_ghost.py`
  — the press-kit ghost cutout. Neither is part of the entry program.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Why this beats the old entry

The old entry ("Skeleton waits 13 years for GTA 6") sits at 2,226/4,498 —
the wait angle is the single most crowded joke in the field. This one runs
on wanted stars, an angle no top-10 entry uses, with the make.fun ghost as
the suspect instead of a sticker in the corner, and the post text sells
make.fun instead of only tagging it.
