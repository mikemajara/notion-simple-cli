import { Select } from "./src/types/core";

export type CollectionPageBlog = {
  likes: number;
  tags: Array<Select>;
  createdAt: Date;
  publishedAt: Date;
  isPublished: boolean;
  author: string;
  editedAt: Date;
  locale: Select;
  slug: string;
  isProtected: boolean;
  summary: string;
  universalSlug: string;
  name: string;
};
