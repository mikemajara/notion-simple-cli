import { ApiColor, SelectPropertyResponse } from './notion-api-endpoints';

export class Select {
  text: string;
  color: ApiColor;

  constructor(property: SelectPropertyResponse) {
    this.text = property.name;
    this.color = property.color;
  }
}
