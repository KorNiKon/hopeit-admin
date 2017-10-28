export class Notification {
  id: string;
  title: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
