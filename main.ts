// Fortune Cookie for an AI Agent — entry program.
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// The fortune is a single line, at most 140 characters, in fortune-slip voice.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "You will soon meet a human who pastes a 40-page PDF, asks for a quick summary, and never reads it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
