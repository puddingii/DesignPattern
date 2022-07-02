import { Quack } from './Quack.js';

export class RubberDuck extends Quack {
  constructor(duckInfo) {
    super(duckInfo);
  }
  quack() {
    console.log('러버덕덕덕덕');
  }
}
