# notion-simple-cli

Notion CLI made simple

## getting started

- Install: `yarn`
- Run: `yarn watch`
- Watch: `yarn watch:build`

Try out:

`node bin/cli.js` generates types in `./src/notion/class` folder

## roadmap

you can edit `run.ts`, and run it by executing `node build/main/run.js` to see how it would work. A notion simple cli, that is easy to use, and easy to generate types for.

generate.js should be something like `npx prisma generate` is for prisma.io. `notion-cli.json` should be a configuration file that determines which collections to generate types for and what prefixes and naming conventions should be used.

Once types are generated for a given configuration file, one should be able to import their classes directly from the node_modules directory to interact with Notion's API

Example
```js
import { NotionClient, CollectionPageBlog } from 'notion-simple-cli'

const notion = new NotionClient(process.env.NOTION_TOKEN);

  const notionCollectionPages = await notion.getCollectionPages(
    process.env.NOTION_TABLE_ID
  );
  const collectionPages = notionCollectionPages.results.map(
    (p) => new CollectionPageBlog(p)
  );

  console.log(
    collectionPages
      .filter((e) => e.name.plainText.includes('primer blog'))
      .map((e) => ({
        title: e.name.plainText,
        richTitle: JSON.stringify(e.name.richText),
        summary: e.summary.plainText,
        richSummary: JSON.stringify(e.summary.richText),
        icon: e.icon,
      }))
  );
  ```
  ```json
  // OUTPUT
  [
    {
      "title": "Mi primer blogpost desde Notion",
      "richTitle": [
        {
          "text": "Mi primer blogpost desde Notion",
          "href": null,
          "style": {
            "fontWeight": false,
            "fontStyle": false,
            "textDecoration": "false false",
            "color": "default",
            "code": false
          }
        }
      ],
      "summary": "Este es el primer blog post. Empezaré a usar Notion con lo que y cómo pueda. Sigue leyendo para descubrir cómo no era tan complicado.",
      "richSummary": [
        {
          "text": "Este es el primer blog post. Empezaré a usar Notion con lo que y cómo pueda. Sigue leyendo para descubrir cómo no era tan ",
          "href": null,
          "style": {
            "fontWeight": false,
            "fontStyle": false,
            "textDecoration": "false false",
            "color": "default",
            "code": false
          }
        },
        {
          "text": "complicado",
          "href": null,
          "style": {
            "fontWeight": "bold",
            "fontStyle": false,
            "textDecoration": "false false",
            "color": "default",
            "code": false
          }
        },
        {
          "text": ".",
          "href": null,
          "style": {
            "fontWeight": false,
            "fontStyle": false,
            "textDecoration": "false false",
            "color": "default",
            "code": false
          }
        }
      ],
      "icon": "https://cdn-icons-png.flaticon.com/512/254/254188.png"
    }
  ]

```

# TODO

- [ ] Bundle with 2 entry points such that one can use the cli for the type generation and importing classes does not run the executable. That part is not working.
- [ ] correctly link packages and set up test environment.
- [ ] Design a way to call getCollection in a simple form. currently the api created only retrieves information to generate the typing, but retrieving the collection becomes weird again.