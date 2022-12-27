import { parseJSONFile } from "./parse-json-file";

export function readNosimcliConfig(filepath) {
  return parseJSONFile(filepath);
}
