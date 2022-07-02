import { Observable } from '../DuckObserver/Observable.js';
import { Quack } from './Quack.js';

export class MallardDuck extends Quack {
  constructor(duckInfo) {
    super(duckInfo);
    this.observable = new Observable(this);
  }
  quack() {
    console.log('말라드닥닥닥닥');
    this.observable.notifyObservers();
  }
  registerObserver(observer) {
    this.observable.registerObserver(observer);
  }
  notifyObserver() {
    this.observable.notifyObservers();
  }
}
