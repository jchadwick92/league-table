import { readFileSync } from "fs";

export function loadCsv(filename: string) {
  const data = readFileSync(filename, { encoding: "utf8" });

  return data.split("\n").map(line => line.split(","));
}
