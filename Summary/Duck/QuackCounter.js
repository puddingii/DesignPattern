import { Quack } from './DuckType/Quack.js';

export class QuackCounter extends Quack {
  static quackCnt = 0;
  duck;
  constructor(duck) {
    super();
    this.duck = duck;
  }

  quack() {
    this.duck.quack();
    QuackCounter.quackCnt++;
  }

  static getQauck() {
    return this.quackCnt;
  }
}
