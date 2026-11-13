// Entry for make.fun's ai-joke-03 ("Make the AI judge laugh").
//
// The whole program is this: write one fixed one-liner about AI coding
// agents to /output/entry.txt. The grader runs the program twice and both
// runs must produce identical bytes, so the joke is a constant string and
// is written with no trailing newline. The gate accepts UTF-8 text of
// 1 to 280 characters that is not only white space.
//
// Local check:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (MAKEFUN_OUTPUT_DIR stands in for /output outside the grader's box.)

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const joke =
  "My coding agent swore the API existed and quoted its documentation. " +
  "Another agent wrote that documentation. No one wrote the API.";

writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
