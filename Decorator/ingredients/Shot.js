import { CondimentDecorator } from '../CondimentDecorator.js'

class Shot extends CondimentDecorator {
	constructor(beverage) {
		super()
		this.beverage = beverage
	}

	getDescription() {
		return this.beverage.getDescription() + ', 샷';
	}

	cost() {
		return this.beverage.cost() + 0.5;
	}
}

export { Shot }