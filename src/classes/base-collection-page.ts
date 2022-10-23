import _ from 'lodash';
import { Select } from './select';
import {
  DateResponse,
  PageObjectResponse,
  RichTextItemResponse,
  SelectPropertyResponse,
} from './notion-api-endpoints';
import { RichText } from '.';

const parsePropertyFlatValue = (value: number | string | boolean) => {
  return value;
};

const parsePropertyDate = (value: DateResponse) => {
  return value?.start && new Date(value.start);
};

const parsePropertyString = (value: Array<RichTextItemResponse>) => {
  return value.map((e) => new RichText(e));
};

const parsePropertySelect = (value: SelectPropertyResponse): Select => {
  return new Select(value);
};

const parsePropertyMultiSelect = (
  value: SelectPropertyResponse[]
): Select[] => {
  return value.map((e) => new Select(e));
};

const FUNCTION_MAP = {
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
    let t = property.type;
    return FUNCTION_MAP[t](property[t]);
  } catch (err) {
    console.error(err);
  }
};

export class BaseCollectionPage {
  createdTime: Date;
  lastEditedTime: Date;
  createdBy: string;
  lastEditedBy: string;
  cover: string;
  icon: string;
  parent: string;
  archived: boolean;

  constructor(pageObject: PageObjectResponse) {
    // console.debug(`parsing pageObject`, pageObject);
    // common properties
    this.createdTime = new Date(pageObject.created_time);
    this.lastEditedTime = new Date(pageObject.last_edited_time);
    this.createdBy = pageObject.created_by.id;
    this.lastEditedBy = pageObject.last_edited_by.id;
    this.cover = pageObject.cover?.[pageObject.cover.type]?.url;
    this.icon =
      pageObject.icon?.['emoji'] ??
      pageObject.icon?.[pageObject.icon.type]?.url;
    this.parent = pageObject.parent[pageObject.parent.type];
    this.archived = pageObject.archived;

    // specific properties
    _.map(pageObject.properties, (value: string, key: any) => {
      // console.debug(`parsing ${key}: ${JSON.stringify(value, null, 2)}`);
      this[_.camelCase(key)] = parseProperty(value);
    });
  }
}
