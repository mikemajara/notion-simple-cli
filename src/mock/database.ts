import { Collection } from "notion-types";

export const mockDatabase = {
  object: "database",
  id: "f8175b3b-af6d-47d1-bc6f-e3e50ec379a5",
  cover: null,
  icon: {
    type: "emoji",
    emoji: "📌",
  },
  created_time: "2022-01-10T15:15:00.000Z",
  created_by: {
    object: "user",
    id: "1322a69d-135a-4d51-b5bc-5684a49344f8",
  },
  last_edited_by: {
    object: "user",
    id: "1322a69d-135a-4d51-b5bc-5684a49344f8",
  },
  last_edited_time: "2022-10-19T08:46:00.000Z",
  title: [
    {
      type: "text",
      text: {
        content: "blog",
        link: null,
      },
      annotations: {
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
        code: false,
        color: "default",
      },
      plain_text: "blog",
      href: null,
    },
  ],
  description: [],
  is_inline: false,
  properties: {
    likes: {
      id: "%3A%7CB%3B",
      name: "likes",
      type: "number",
      number: {
        format: "number",
      },
    },
    tags: {
      id: "Iyw%3C",
      name: "tags",
      type: "multi_select",
      multi_select: {
        options: [
          {
            id: "9da5d364-2253-4d12-85cb-bcd23ab4cb6e",
            name: "content-creation",
            color: "purple",
          },
          {
            id: "ee341024-e9c0-4ef5-a7ba-f551dd310e22",
            name: "lifestyle",
            color: "orange",
          },
          {
            id: "480313f4-29a6-4807-96f9-1f1156e640f3",
            name: "tech",
            color: "green",
          },
          {
            id: "116f6eed-d128-4eec-a691-c450cbf17712",
            name: "social",
            color: "pink",
          },
          {
            id: "6c20352b-4d5f-451a-be65-e63edfb0ff80",
            name: "blog",
            color: "red",
          },
          {
            id: "0ea844c4-6b67-4978-8618-5db7cb6c038e",
            name: "nextjs",
            color: "yellow",
          },
          {
            id: "efc8e7de-8acd-429a-a2d8-b19cf87b420c",
            name: "notion",
            color: "gray",
          },
          {
            id: "17f0c2d4-9b9b-4a67-a05a-f259359937a2",
            name: "tutorial",
            color: "blue",
          },
          {
            id: "7316eb9d-17a5-4204-82d6-d7d9f4be5173",
            name: "filosofia",
            color: "brown",
          },
          {
            id: "35860278-490e-4cab-93fa-c6e3c963f995",
            name: "speech",
            color: "brown",
          },
          {
            id: "99e7616c-6d05-47f1-a32e-de6295c2ac51",
            name: "family",
            color: "purple",
          },
          {
            id: "8e906a9f-74fe-481f-adaa-9d8cbbe6c394",
            name: "wedding",
            color: "gray",
          },
          {
            id: "96e42236-3315-47e1-9de9-b0a5b471b0e8",
            name: "tool",
            color: "gray",
          },
          {
            id: "41c3fdff-b869-4f50-9fb8-e56146d41f5b",
            name: "react",
            color: "default",
          },
          {
            id: "fe0bc3ff-bcf3-4f8a-9fac-21f0aa044237",
            name: "fivetran",
            color: "blue",
          },
          {
            id: "d9eca52a-266e-4c95-b03f-6fe72d362d0b",
            name: "pipeline",
            color: "purple",
          },
          {
            id: "5cfcca5b-721c-42b5-a62c-ed219936da58",
            name: "data",
            color: "green",
          },
          {
            id: "f6682b5d-369e-4e90-b7a0-2be7d323b25b",
            name: "postgresql",
            color: "brown",
          },
          {
            id: "195ee369-8f06-426e-938c-43f18b5b2f62",
            name: "trigger",
            color: "blue",
          },
          {
            id: "57eb3b42-05aa-49e3-b808-83ea09042fb9",
            name: "problem-solving",
            color: "gray",
          },
          {
            id: "14ae813c-2657-4057-baa5-71f68bc38d9e",
            name: "psicologia",
            color: "green",
          },
          {
            id: "2f0c1d42-600f-447d-a936-d5854fa03069",
            name: "life",
            color: "purple",
          },
          {
            id: "d20f0b65-5b1e-46b2-8be3-628d8e5ca46d",
            name: "chakra-ui",
            color: "pink",
          },
          {
            id: "99fefbac-b561-4fa4-a0ee-37d64375a172",
            name: "npm",
            color: "pink",
          },
          {
            id: "8f280caf-973d-44ae-9c34-897becef4d31",
            name: "opinion",
            color: "orange",
          },
          {
            id: "fa66b6c5-b1c5-4617-9cb0-d4118d199ae3",
            name: "sql-server",
            color: "orange",
          },
          {
            id: "d81acfe8-4785-4c45-a857-74ee97c71f28",
            name: "finance",
            color: "purple",
          },
          {
            id: "95d9eaea-53fc-470e-99b4-83a127c093bc",
            name: "projects",
            color: "blue",
          },
          {
            id: "b68b06f9-b40f-4500-b4bf-0f321fbf5f82",
            name: "auth",
            color: "default",
          },
          {
            id: "4fcbad03-acd2-48a4-9219-2978ddd12d7f",
            name: "authentication",
            color: "gray",
          },
          {
            id: "29b2cda3-3b13-41bc-919d-183ca5e7e239",
            name: "supabase",
            color: "green",
          },
          {
            id: "2f8e5164-66b1-43d0-9f5b-823f16cb07d7",
            name: "alfred",
            color: "orange",
          },
          {
            id: "c712a1cd-09e3-4c25-ad7c-69fad3c876ee",
            name: "clipboard",
            color: "orange",
          },
          {
            id: "650ca821-4307-47e6-9063-e943d686b486",
            name: "history",
            color: "purple",
          },
          {
            id: "1834168b-61ed-4e92-b16b-81c3a1825f20",
            name: "hacks",
            color: "default",
          },
          {
            id: "6bb6825d-5066-4a4f-8b6c-fe9775f1f4ce",
            name: "vercel",
            color: "purple",
          },
          {
            id: "b98cdcac-f7d7-46ad-952b-ee72fc85a787",
            name: "automation",
            color: "default",
          },
          {
            id: "5e870f66-a103-451d-94a6-c0f59db67ca9",
            name: "lambda-function",
            color: "orange",
          },
        ],
      },
    },
    createdAt: {
      id: "LUA%7C",
      name: "createdAt",
      type: "created_time",
      created_time: {},
    },
    publishedAt: {
      id: "R%5C%7C%3D",
      name: "publishedAt",
      type: "date",
      date: {},
    },
    isPublished: {
      id: "Zft%7C",
      name: "isPublished",
      type: "checkbox",
      checkbox: {},
    },
    author: {
      id: "%5D%5BJ~",
      name: "author",
      type: "rich_text",
      rich_text: {},
    },
    editedAt: {
      id: "%5D%7BDA",
      name: "editedAt",
      type: "last_edited_time",
      last_edited_time: {},
    },
    locale: {
      id: "k%3Dp%3D",
      name: "locale",
      type: "select",
      select: {
        options: [
          {
            id: "f123f00d-7381-40c7-b224-adf3b6f281c0",
            name: "en",
            color: "blue",
          },
          {
            id: "fe762d30-2dd6-4427-93ef-9c7f50cf6c43",
            name: "es",
            color: "red",
          },
        ],
      },
    },
    slug: {
      id: "njx_",
      name: "slug",
      type: "rich_text",
      rich_text: {},
    },
    isProtected: {
      id: "plB_",
      name: "isProtected",
      type: "checkbox",
      checkbox: {},
    },
    summary: {
      id: "v%60In",
      name: "summary",
      type: "rich_text",
      rich_text: {},
    },
    "universal-slug": {
      id: "zxu%5E",
      name: "universal-slug",
      type: "rich_text",
      rich_text: {},
    },
    name: {
      id: "title",
      name: "name",
      type: "title",
      title: {},
    },
  },
  parent: {
    type: "page_id",
    page_id: "9bcbccb7-d877-41d5-93be-34103b173cc4",
  },
  url: "https://www.notion.so/f8175b3baf6d47d1bc6fe3e50ec379a5",
  archived: false,
};
