import { Client } from '@notionhq/client';
import {
  DatabaseObjectResponse,
  GetDatabaseResponse,
  QueryDatabaseBodyParameters,
  QueryDatabaseResponse,
} from '../classes/notion-api-endpoints';

export class NotionClient {
  notion: Client;

  constructor(notionToken: string) {
    console.log(`creating new client with ${notionToken}`);
    this.notion = new Client({ auth: notionToken });
  }

  getCollection = async (databaseId): Promise<DatabaseObjectResponse> => {
    const response = await this.notion.databases.retrieve({
      database_id: databaseId,
    });
    return response as DatabaseObjectResponse;
  };

  getCollectionPages = async (
    databaseId,
    query?: QueryDatabaseBodyParameters
  ): Promise<QueryDatabaseResponse> => {
    const response = await this.notion.databases.query({
      database_id: databaseId,
      ...query,
    });
    return response;
  };

  getPage = async () => {};
  getPageChildren = async () => {};

  getBlock = async () => {};
  getBlockChildren = async () => {};
}
