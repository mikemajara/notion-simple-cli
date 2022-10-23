import _ from 'lodash';
import { RichText } from '../classes';
import {
  DatabaseObjectResponse,
  DatabasePropertyConfigResponse,
} from '../classes/notion-api-endpoints';

const PAGE_NAME_PREFIX = 'CollectionPage';

export const TYPE_MAP = {
  created_time: 'Date',
  last_edited_time: 'Date',
  date: 'Date',
  rich_text: 'string',
  title: 'string',
  number: 'number',
  select: 'Select',
  multi_select: 'Array<Select>',
  checkbox: 'boolean',
};

/**
 * Given the properties of a collection, it maps their types to a
 * Typescript type string definition.
 * @param property Property
 * @returns string
 */
export function mapCollectionProperties(
  propertyConfig: Record<string, DatabasePropertyConfigResponse>
) {
  return _.join(
    _.map(
      propertyConfig,
      (property) => `${_.camelCase(property.name)}: ${TYPE_MAP[property.type]};`
    ),
    '\n'
  );
}

export class Collection {
  id: string;
  createdTime: Date;
  lastEditedTime: Date;
  title: RichText[];
  description: RichText[];
  url: string;
  properties: Record<string, DatabasePropertyConfigResponse>;

  constructor(colObj: DatabaseObjectResponse) {
    this.id = colObj.id;
    this.createdTime = new Date(colObj.created_time);
    this.lastEditedTime = new Date(colObj.last_edited_time);
    this.url = colObj.url;
    this.title = colObj.title.map((e) => new RichText(e));
    this.description = colObj.description.map((e) => new RichText(e));
    this.properties = colObj.properties;
  }

  getCollectionClassName = (prefix: string = ''): string => {
    return (
      prefix +
      _.upperFirst(
        _.camelCase(this.title.map((e: RichText) => e.plainText).join(' '))
      )
    );
  };

  getPropertiesTypeDefinition = (): string => {
    let className = this.getCollectionClassName(PAGE_NAME_PREFIX);
    let typeDefinition = `export type ${className} = {
      ${mapCollectionProperties(this.properties)}
    };`;
    return typeDefinition;
  };
}
