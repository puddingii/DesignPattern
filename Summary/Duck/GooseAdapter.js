import { Quack } from './DuckType/Quack.js';

export class GooseAdapter extends Quack {
  goose;
  /** @param {import('./DuckType/Goose').Goose} goose */
  constructor(goose) {
    super();
    this.goose = goose;
  }
  quack() {
    this.goose.honk();
  }
}
