import { Goose } from '../DuckType/Goose.js';
import { MallardDuck } from '../DuckType/MallardDuck.js';
import { RedheadDuck } from '../DuckType/RedheadDuck.js';
import { RubberDuck } from '../DuckType/RubberDuck.js';
import { GooseAdapter } from '../GooseAdapter.js';
import { AbstractDuckFactory } from './AbstractDuckFactory.js';

export class DuckFactory extends AbstractDuckFactory {
  createMallardDuck() {
    return new MallardDuck();
  }
  createRedheadDuck() {
    return new RedheadDuck();
  }
  createRubberDuck() {
    return new RubberDuck();
  }
  createGoose() {
    return new GooseAdapter(new Goose());
  }
}
