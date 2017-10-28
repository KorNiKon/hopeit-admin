export class Message {
  id: string;
  title: string;
  content: string;
  read: boolean;
  attachments: object;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
