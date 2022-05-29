import { Duck } from './Duck.js';

export class TurkeyAdapter extends Duck {
  constructor(turkey) {
    super();
    this.turkey = turkey;
  }
  turkey;

  quack() {
    this.turkey.gobble();
  }

  fly() {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}
