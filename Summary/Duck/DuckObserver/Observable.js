import { QuackObservable } from './QuackObservable.js';

export class Observable extends QuackObservable {
  observers = [];
  constructor(duck) {
    super();
    this.duck = duck;
  }
  registerObserver(observer) {
    this.observers.push(observer);
  }
  notifyObservers() {
    this.observers.forEach((observer) => {
      observer.update(this.duck);
    });
  }
}
