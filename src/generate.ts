import _ from 'lodash';
import prettier from 'prettier';
import fs from 'fs';
import { Collection } from './notion/collection';
import { NotionClient } from './notion/client';
import { CollectionPageBlog } from './classes/my-notion-classes';
import * as dotenv from 'dotenv';
import { PageObjectResponse } from './classes/notion-api-endpoints';

dotenv.config();

const TYPES_DIR = './src/classes';

(async () => {
  const notion = new NotionClient(process.env.NOTION_TOKEN);

  const notionCollection = await notion.getCollection(
    process.env.NOTION_TABLE_ID
  );

  const collection = new Collection(notionCollection);

  console.log(`Adding imports\n\n`);

  const propertiesTypeDefinition = collection.getPropertiesTypeDefinition();

  let prettyStr = prettier.format(propertiesTypeDefinition, {
    parser: 'typescript',
  });

  console.log(`Writing definition\n\n`);
  console.log(prettyStr);
  fs.writeFile(`${TYPES_DIR}/my-notion-classes.ts`, prettyStr, () => {});
})();
