import _ from 'lodash';
import { Select } from './select';
import {
  DateResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
  QueryDatabaseBodyParameters,
  RichTextItemResponse,
  SelectPropertyResponse,
} from './notion-api-endpoints';
import { RichText } from '.';

const parsePropertyFlatValue = (value: number | string | boolean) => {
  return value;
};

const parsePropertyDate = (value: DateResponse) => {
  return value?.start; //&& new Date(value.start);
};

const parsePropertyString = (value: Array<RichTextItemResponse>) => {
  return new RichText(value);
};

const parsePropertySelect = (value: SelectPropertyResponse): Select => {
  return new Select(value);
};

const parsePropertyMultiSelect = (
  value: SelectPropertyResponse[]
): Select[] => {
  return value.map((e) => new Select(e));
};

const FUNCTION_MAP: Record<string, any> = {
  created_time: parsePropertyFlatValue,
  last_edited_time: parsePropertyFlatValue,
  date: parsePropertyDate,
  rich_text: parsePropertyString,
  title: parsePropertyString,
  number: parsePropertyFlatValue,
  select: parsePropertySelect,
  multi_select: parsePropertyMultiSelect,
  checkbox: parsePropertyFlatValue,
};

const parseProperty = (property: any) => {
  try {
    const t = property.type;
    return FUNCTION_MAP[t](property[t]);
  } catch (err) {
    console.error(err);
  }
};

export class BaseCollectionPage {
  id: string;
  createdTime: Date;
  lastEditedTime: Date;
  createdBy: string;
  lastEditedBy: string;
  cover: string;
  icon: string;
  parent: string;
  archived: boolean;

  constructor(pageObj: PageObjectResponse | PartialPageObjectResponse) {
    // console.debug(`parsing pageObject`, pageObject);
    // common properties
    const pageObject = pageObj as PageObjectResponse;
    this.id = pageObject.id;
    this.createdTime = new Date(pageObject.created_time);
    this.lastEditedTime = new Date(pageObject.last_edited_time);
    this.createdBy = pageObject.created_by.id;
    this.lastEditedBy = pageObject.last_edited_by.id;
    this.archived = pageObject.archived;

    this.cover = pageObject.cover?.[pageObject.cover.type]?.url;
    this.icon =
      pageObject.icon?.['emoji'] ??
      pageObject.icon?.[pageObject.icon.type]?.url;
    this.parent = pageObject.parent[pageObject.parent.type];

    // specific properties
    _.map(pageObject.properties, (value: string, key: any) => {
      // console.debug(`parsing ${key}: ${JSON.stringify(value, null, 2)}`);
      this[_.camelCase(key)] = parseProperty(value);
    });
  }
}
