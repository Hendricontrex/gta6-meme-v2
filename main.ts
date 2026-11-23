// gta6-meme-x-01 v2 entry program (Node 22, standard library only).
//
// The entry is the X post itself, not this program. This program has one job:
// hand the post's address to the grader. It reads POST.json from the bot
// directory, checks that it names a real X status URL, and writes those exact
// bytes into the output directory. No network, no clock, no files outside the
// repository, so two runs of it always write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = readFileSync(join(botDir, 'POST.json'), 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || !('url' in parsed)) {
  console.error('POST.json must be a JSON object with a url field');
  process.exit(1);
}
const url = (parsed as { url: unknown }).url;
if (
  typeof url !== 'string' ||
  !/^https:\/\/(x\.com|twitter\.com)\/\S+\/status\/\d+$/.test(url) ||
  /\/status\/0+$/.test(url)
) {
  console.error('POST.json url must be a real posted X status address');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), raw);
