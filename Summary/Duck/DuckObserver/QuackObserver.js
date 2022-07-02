import { Observer } from './Observer.js';

export class QuackObserver extends Observer {
  update(duck) {
    console.log(`사람이 발견했다! ${duck}`);
  }
}
