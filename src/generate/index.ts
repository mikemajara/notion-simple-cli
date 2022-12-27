import fs from 'fs';
import path from 'path';
import { NotionClient } from '../notion/client';
import { Collection } from './collection';

const saveFile = async (
  content: string,
  filepath: string,
  filename: string
) => {
  const fullPath = path.join(__dirname, filepath, filename);
  console.log(`Saving file to ${fullPath} `);

  fs.writeFileSync(fullPath, content);
};

export const genClassFilesForConfig = async (config: any, output: string) => {
  const secret = process.env.NOTION_SECRET;
  if (!secret) throw Error('Notion secret is not defined');
  const notion = new NotionClient(secret);

  for (let database of config.databases) {
    let notionCollection = await notion.getCollection(database.id);
    let collection = new Collection(notionCollection);
    console.log(`processing database `, database);
    const [content, fileName] = [
      collection.genClassFileString(database.name, database.prefix),
      collection.getFileName(database.name, database.prefix),
    ];
    if (!fs.existsSync(path.join(__dirname, output))) {
      fs.mkdirSync(path.join(__dirname, output), { recursive: true });
    }
    saveFile(content, output, fileName);
    fs.readdirSync(path.join(__dirname, '../src/notion/class')).forEach((e) => {
      console.log(
        `copying file ${path.join(
          __dirname,
          '../src/notion/class',
          e
        )} to ${path.join(output, e)}`
      );
      fs.copyFileSync(
        path.join(__dirname, '../src/notion/class', e),
        path.join(__dirname, output, e)
      );
    });
  }
};
