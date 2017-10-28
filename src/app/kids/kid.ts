export class Kid {
  id: string;
  name: string;
  age: number;
  desc: string;
  cashTarget: number;
  cashNow: number;
  category: string;
  deadline: number;
  lastChance: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
