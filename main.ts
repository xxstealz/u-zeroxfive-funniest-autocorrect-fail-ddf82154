// Funniest Autocorrect Fail — u-zeroxfive-funniest-autocorrect-fail-ddf82154
// Writes one line (97 chars, gate 1-199) to /output/entry.txt.
// The line reads as a real autocorrect slip: "ducking" for the f-word,
// and the joke lands on the absurd consequence — HR now thinks the
// sender is a waterfowl with a doctor's note.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I told my boss I was 'ducking' sick, and now HR thinks I'm a waterfowl with a doctor's note.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : join(process.cwd(), "output");

// Gate validation (competition: entry.txt must be UTF-8 text of
// 1 to 199 characters, one line, not only white space).
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry line is ${LINE.length} chars, gate is 1-199`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
