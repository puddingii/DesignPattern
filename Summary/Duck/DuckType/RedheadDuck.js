import { Quack } from './Quack.js';

export class RedheadDuck extends Quack {
  constructor(duckInfo) {
    super(duckInfo);
  }
  quack() {
    console.log('레드헤덕덕덕');
  }
}
