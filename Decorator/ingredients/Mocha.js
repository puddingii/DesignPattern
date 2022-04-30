import { CondimentDecorator } from '../CondimentDecorator.js'

class Mocha extends CondimentDecorator {
	MOCHACOST = 1.2
	sizeType = {
		TALL: 1,
		GRANDE: 1.2,
		VENTI: 1.5
	}
	constructor(beverage) {
		super()
		this.beverage = beverage
	}

	getDescription() {
		return this.beverage.getDescription() + ', 모카';
	}

	cost() {
		const curCost = this.beverage.cost();
		const plusOptionCost = this.sizeType[this.beverage.getSize()]

		return (this.MOCHACOST * plusOptionCost) + curCost
	}
}

export { Mocha }