// One-Line Office Joke: 24-Hour Sprint — one original office one-liner.
// The grader runs this program twice; it must write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I marked myself 'in a meeting' to eat lunch in peace, and now three people have booked time with my sandwich.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
