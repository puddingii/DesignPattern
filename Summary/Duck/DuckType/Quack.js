import { QuackObservable } from '../DuckObserver/QuackObservable.js';

export class Quack extends QuackObservable {
  constructor(duckInfo) {
    super();
    this.name = duckInfo?.name ?? '기본덕';
  }
  quack() {}
  getName() {
    return this.name;
  }
}
