import { MallardDuck } from './MallardDuck.js';
import { TurkeyAdapter } from './TurkeyAdapter.js';
import { WildTurkey } from './WildTurkey.js';

const testDuck = (duck) => {
  duck.quack();
  duck.fly();
};

const duck = new MallardDuck();
const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

console.log('칠면조가 뭐라한다.');
turkey.gobble();
turkey.fly();

console.log('오리가 뭐라한다');
testDuck(duck);

console.log('칠면조가 오리를 따라가려한다.');
testDuck(turkeyAdapter);
