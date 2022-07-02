import { Goose } from '../DuckType/Goose.js';
import { MallardDuck } from '../DuckType/MallardDuck.js';
import { RedheadDuck } from '../DuckType/RedheadDuck.js';
import { RubberDuck } from '../DuckType/RubberDuck.js';
import { GooseAdapter } from '../GooseAdapter.js';
import { QuackCounter } from '../QuackCounter.js';
import { AbstractDuckFactory } from './AbstractDuckFactory.js';

export class CountingDuckFactory extends AbstractDuckFactory {
  createMallardDuck(duckInfo) {
    return new QuackCounter(new MallardDuck(duckInfo));
  }
  createRedheadDuck(duckInfo) {
    return new QuackCounter(new RedheadDuck(duckInfo));
  }
  createRubberDuck(duckInfo) {
    return new QuackCounter(new RubberDuck(duckInfo));
  }
  createGoose(duckInfo) {
    return new QuackCounter(new GooseAdapter(new Goose(duckInfo)));
  }
}
