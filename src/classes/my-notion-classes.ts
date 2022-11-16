// This file was autogenerated by notion-simple-cli
// don't edit below this line

import { RichText } from "./rich-text";
import { BaseCollectionPage } from "./base-collection-page";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "./notion-api-endpoints";
import { Select } from "./select";

export class CollectionPageBlog extends BaseCollectionPage {
  likes: number;
  tags: Array<Select>;
  createdAt: Date;
  publishedAt: Date;
  isPublished: boolean;
  author: RichText;
  editedAt: Date;
  locale: Select;
  slug: RichText;
  isProtected: boolean;
  summary: RichText;
  universalSlug: RichText;
  name: RichText;

  constructor(pageObject: PageObjectResponse | PartialPageObjectResponse) {
    super(pageObject);
  }
}
