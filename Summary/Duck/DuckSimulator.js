import { CountingDuckFactory } from './DuckFactory/CountingDuckFactory.js';
import { QuackObserver } from './DuckObserver/QuackObserver.js';
import { Flock } from './Flock.js';
import { QuackCounter } from './QuackCounter.js';

export class DuckSimulator {
  constructor() {
    this.duckFactory = new CountingDuckFactory();
  }
  playSimulate() {
    const mallard = this.duckFactory.createMallardDuck({ name: '말라덕1' });
    const redhead = this.duckFactory.createRedheadDuck({ name: '레드훅덕' });
    const rubber = this.duckFactory.createRubberDuck({ name: '러버덕' });
    const goose = this.duckFactory.createGoose({ name: '구스라네~' });

    const flockOfDucks = new Flock();
    flockOfDucks.add(redhead);
    flockOfDucks.add(rubber);
    flockOfDucks.add(mallard);
    flockOfDucks.add(goose);

    const flockOfMallardDucks = new Flock();
    flockOfMallardDucks.add(this.duckFactory.createMallardDuck({ name: '말라덕2' }));
    flockOfMallardDucks.add(this.duckFactory.createMallardDuck({ name: '말라덕3' }));
    flockOfMallardDucks.add(this.duckFactory.createMallardDuck({ name: '말라덕5' }));
    flockOfMallardDucks.add(this.duckFactory.createMallardDuck({ name: '말라덕4' }));
    flockOfMallardDucks.add(this.duckFactory.createMallardDuck({ name: '말라덕7' }));

    flockOfDucks.add(flockOfMallardDucks);
    console.log('전체 오리 시뮬레이터 시작');

    const people = new QuackObserver();
    flockOfDucks.registerObserver(people);

    this.simulate(flockOfDucks);

    // console.log('말라드 덕 시뮬레이터 시작');
    // this.simulate(flockOfMallardDucks);

    console.log(`오리가 소리낸 횟수 : ${QuackCounter.getQauck()} 번`);
  }
  simulate(duck) {
    duck.quack();
  }
}
