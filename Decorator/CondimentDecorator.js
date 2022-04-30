import { Beverage } from './Beverage.js';

class CondimentDecorator extends Beverage {
	beverage;
	getDescription() {}
	getSize() {
		return this.beverage.getSize();
	}
}

export { CondimentDecorator };