import { CondimentDecorator } from '../CondimentDecorator.js'

class Mocha extends CondimentDecorator {
	constructor(beverage) {
		super()
		this.beverage = beverage
	}

	getDescription() {
		return this.beverage.getDescription() + ', 모카';
	}

	cost() {
		return this.beverage.cost() + 1.0;
	}
}

export { Mocha }