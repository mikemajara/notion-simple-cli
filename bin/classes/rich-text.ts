import { RichTextItemResponse, AnnotationResponse, ApiColor } from './notion-api-endpoints';

export class TextStyle {
  fontWeight: string | null;
  fontStyle: string | null;
  textDecoration: string | null;
  code: boolean;
  color: ApiColor;
  backgroundColor: string | null;

  constructor(annotations: AnnotationResponse) {
    this.fontWeight = annotations.bold ? 'bold' : null;
    this.fontStyle = annotations.italic ? 'italic' : null;
    this.textDecoration = [annotations.strikethrough && 'line-through', annotations.underline && 'underline'].join(' ');
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
  richText: Text[];

  constructor(richTextArray: RichTextItemResponse[]) {
    this.plainText = richTextArray.map((e) => e.plain_text).join('');
    this.richText = richTextArray.map((e) => new Text(e));
  }
}

export class Text {
  text: string | null;
  href: string | null;
  style: TextStyle | null;

  constructor(richText: RichTextItemResponse) {
    this.text = richText.plain_text;
    this.href = richText.href;
    this.style = new TextStyle(richText.annotations);
  }
}
