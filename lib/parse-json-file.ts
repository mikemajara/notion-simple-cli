import * as fs from 'fs';

export function parseJSONFile(path: string) {
  let rawdata = fs.readFileSync(path).toString();
  let data = JSON.parse(rawdata);
  return data;
}
