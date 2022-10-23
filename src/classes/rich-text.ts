import {
  RichTextItemResponse,
  AnnotationResponse,
  ApiColor,
} from './notion-api-endpoints';

export class TextStyle {
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  code: boolean;
  color: ApiColor;
  backgroundColor: string;

  constructor(annotations: AnnotationResponse) {
    this.fontWeight = annotations.bold && 'bold';
    this.fontStyle = annotations.italic && 'italic';
    this.textDecoration = [
      annotations.strikethrough && 'line-through',
      annotations.underline && 'underline',
    ].join(' ');
    if (annotations.color.includes('background')) {
      this.backgroundColor = annotations.color.replace('_background', '');
    } else {
      this.color = annotations.color;
    }
    this.code = annotations.code;
  }
}

export class RichText {
  plainText: string;
  href: string;
  style: TextStyle;

  constructor(richText: RichTextItemResponse) {
    this.plainText = richText.plain_text;
    this.href = richText.href;
    this.style = new TextStyle(richText.annotations);
  }
}
