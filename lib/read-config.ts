import { parseJSONFile } from './parse-json-file';

export function readNosimcliConfig(path: string) {
  return parseJSONFile(path);
}
