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

  const notionCollectionPages = await notion.getCollectionPages(
    process.env.NOTION_TABLE_ID
  );
  const collectionPages = notionCollectionPages.results.map(
    (p) => new CollectionPageBlog(p)
  );
  // console.log(collectionPages.map((e) => e.name));

  console.log(
    JSON.stringify(
      collectionPages
        .filter((e) => e.name.plainText.includes('primer blog'))
        .map((e) => ({
          title: e.name.plainText,
          richTitle: e.name.richText,
          summary: e.summary.plainText,
          richSummary: e.summary.richText,
          icon: e.icon,
        })),
      null,
      2
    )
  );

  // console.log(collectionPages.filter((e) => e.locale.text == 'en'));

  let prettyStr = prettier.format(JSON.stringify(collectionPages), {
    parser: 'json',
  });

  console.log(`Writing pages\n\n`);
  // console.log(prettyStr);
  fs.writeFile('./properties-output.json', prettyStr, () => {});
})();
