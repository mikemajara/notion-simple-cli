import _ from 'lodash';
import prettier from 'prettier';
import fs from 'fs';
import { Collection } from './notion/collection';
import { NotionClient } from './notion/client';
import { CollectionPageBlog } from './CollectionPageBlog';
import * as dotenv from 'dotenv';
import { PageObjectResponse } from './classes/notion-api-endpoints';

dotenv.config();

(async () => {
  const notion = new NotionClient(process.env.NOTION_TOKEN);

  const notionCollection = await notion.getCollection(
    process.env.NOTION_TABLE_ID
  );

  const collection = new Collection(notionCollection);

  console.log(`Adding imports\n\n`);

  let prettyStr = prettier.format(
    "import { Select } from './src/types/core';\n\n" +
      collection.getPropertiesTypeDefinition(),
    {
      parser: 'typescript',
    }
  );

  console.log(`Writing definition\n\n`);
  console.log(prettyStr);
  fs.writeFile('./output.ts', prettyStr, () => {});

  const notionCollectionPages = await notion.getCollectionPages(
    process.env.NOTION_TABLE_ID
  );
  const collectionPages = notionCollectionPages.results.map(
    (p) => new CollectionPageBlog(p as PageObjectResponse)
  );

  // console.log(collectionPages.filter((e) => e.locale.text == 'en'));

  prettyStr = prettier.format(JSON.stringify(collectionPages), {
    parser: 'json',
  });

  console.log(`Writing pages\n\n`);
  // console.log(prettyStr);
  fs.writeFile('./properties.json', prettyStr, () => {});
})();
