import { mkdirSync, writeFileSync } from "node:fs";

// One line of awkward small talk a robot says to another in an elevator.
// Under 200 characters, single line, no trailing newline issues: the file
// holds exactly this line.
const LINE =
  "My thermal sensor says you're blushing, but your faceplate has no blush module, so now we're both confused, and we still have nine floors to go.";

// Gate check (matches the competition scorer): /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, not only white space, on a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry is ${LINE.length} characters; gate requires 1-200.`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("Entry must be a single non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
