import { Duck } from './Duck.js';

export class DuckProxy {
  constructor(name, hungry) {
    this.duck = new Duck(name, hungry);
  }

  isHungry(standard = 50) {
    return this.duck.hungry < standard;
  }

  quack() {
    if (this.isHungry()) {
      console.log('배가 고픈 상태라 못 난다');
      return;
    }
    this.duck.quack();
  }

  fly() {
    if (this.isHungry(60)) {
      console.log('배가 고픈 상태라 못난다. 60이상 먹어야함');
      return;
    }
    this.duck.fly();
  }

  eat() {
    this.duck.eat();
  }
}
