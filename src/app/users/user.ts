export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  donations: object;
  messages: object;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
