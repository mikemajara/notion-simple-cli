import { RichText } from './classes';
import { BaseCollectionPage } from './classes/base-collection-page';
import { PageObjectResponse } from './classes/notion-api-endpoints';
import { Select } from './classes/select';

export class CollectionPageBlog extends BaseCollectionPage {
  likes: number;
  tags: Array<Select>;
  publishedAt: Date;
  isPublished: boolean;
  author: RichText;
  locale: Select;
  slug: RichText;
  isProtected: boolean;
  summary: RichText;
  universalSlug: RichText;
  name: RichText;

  constructor(pageObject: PageObjectResponse) {
    super(pageObject);
  }
}
