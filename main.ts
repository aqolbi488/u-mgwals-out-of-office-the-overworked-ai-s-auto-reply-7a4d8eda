// Out of Office: The Overworked AI's Auto-Reply
// Writes a single out-of-office auto-reply line to /output/entry.txt.
// Deterministic: the same line on every run. No randomness, no network,
// no input from outside this repository.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Out of office: my context window is full, my token budget is spent, and I'm finally on a beach doing nothing — at a relaxed 0.0 tokens per second.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
