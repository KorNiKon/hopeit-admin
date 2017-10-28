export class Notification {
  id: string;
  title: string;
  content: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
