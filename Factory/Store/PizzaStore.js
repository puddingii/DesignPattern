// @ts-nocheck
/**
 * @class
 * @abstract
 */
class PizzaStore {
	constructor() {}

	orderPizza(type) {
		const pizza = this.createPizza(type)

		pizza.prepare()
		pizza.bake()
		pizza.cut()
		pizza.box()

		console.log(`완성되었다! 핏자! 이름은! 이다! ${pizza.getName()}`)
	}

	/** @abstract */
	createPizza(type) {}
}

export { PizzaStore }