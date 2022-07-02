import { Observable } from './DuckObserver/Observable.js';
import { Quack } from './DuckType/Quack.js';

/** 컴포지트 패턴 */
export class Flock extends Observable {
  duckList = [];

  add(duck) {
    this.duckList.push(duck);
  }

  quack(duckList = this.duckList) {
    for (const duck of duckList) {
      if (duck.length > 0) {
        this.quack(duck);
        return;
      }
      duck.quack();
    }
  }
}
