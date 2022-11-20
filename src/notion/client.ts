import { Client } from '@notionhq/client';
import {
  DatabaseObjectResponse,
  GetDatabaseResponse,
  QueryDatabaseBodyParameters,
  QueryDatabaseResponse,
} from './class/notion-api-endpoints';

export class NotionClient {
  public notion: Client;

  public constructor(notionToken: string) {
    console.log(`Creating Notion client with token ${notionToken}`);
    this.notion = new Client({ auth: notionToken });
  }

  public getCollection = async (databaseId: string): Promise<DatabaseObjectResponse> => {
    console.log(`Retrieving collection ${databaseId}`);
    const response = await this.notion.databases.retrieve({
      database_id: databaseId,
    });
    return response as DatabaseObjectResponse;
  };

  public getCollectionPages = async (
    databaseId: string,
    query?: QueryDatabaseBodyParameters,
  ): Promise<QueryDatabaseResponse> => {
    const response = await this.notion.databases.query({
      database_id: databaseId,
      ...query,
    });
    return response;
  };

  public getPage = async () => {
    throw Error(`undefined method`);
  };
  public getPageChildren = async () => {
    throw Error(`undefined method`);
  };

  public getBlock = async () => {
    throw Error(`undefined method`);
  };
  public getBlockChildren = async () => {
    throw Error(`undefined method`);
  };
}
