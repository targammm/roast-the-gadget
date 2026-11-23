// One-Line Roast: The Gadget You Use Every Day.
// The program writes one roast line (1-200 UTF-8 characters)
// to /output/entry.txt, and reads nothing from anywhere else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My phone unlocks for my face at 3 a.m. but not in sunlight with sunglasses on — it recognises me best when I look dead.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate refuses anything outside 1-200 characters, so refuse
// loudly here instead of shipping an invalid entry.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`roast line must be 1-200 characters, got ${length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
