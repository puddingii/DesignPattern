import { NYPizzaIngredientFactory } from "../Integredient/NYPizzaIngredientFactory.js";
import { CheesePizza } from "../Pizza/PizzaType/CheesePizza.js";
import { PepperoniPizza } from "../Pizza/PizzaType/PepperoniPizza.js";
import { PizzaStore } from "./PizzaStore.js";

class NYStylePizzaStore extends PizzaStore {
	constructor() {
		super()
	}

	createPizza(type) {
		const integredient = new NYPizzaIngredientFactory()

		let pizza;
		switch(type) {
			case 'cheese':
				pizza = new CheesePizza(integredient)
				pizza.setName('뉴욕취즈퓟자')
				break
			case 'pepperoni':
				pizza = new PepperoniPizza(integredient)
				pizza.setName('뉴욕페퍼로니퓟자')
				break
			default:
				console.log('그런 피자는 없다!')
		}

		return pizza
	}
}

export { NYStylePizzaStore }