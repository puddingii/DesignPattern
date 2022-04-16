import { Duck } from './Duck/index.js'
import { DecoyDuck } from './Duck/DecoyDuck.js'
import { FlyNoWay } from './Duck/FlyBehavior/FlyNoWay.js';

const myDuck = new Duck();

myDuck.FlyBehavior.fly();
myDuck.setFlyBehavior(new FlyNoWay());
myDuck.FlyBehavior.fly();

const myDecoyDuck = new DecoyDuck();
myDecoyDuck.FlyBehavior.fly();