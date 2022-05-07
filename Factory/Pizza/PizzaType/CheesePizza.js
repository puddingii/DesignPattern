import { Pizza } from "../Pizza.js"

class CheesePizza extends Pizza {
	integredient
	constructor(integredient) {
		super()
		this.integredient = integredient
	}

	prepare() {
		console.log(`준비 중: ${this.name}`)
		this.dough = this.integredient.createDough()
		this.sauce = this.integredient.createSauce()
		this.cheese = this.integredient.createCheese()
		this.toppings = this.integredient.createVeggies()
	}
}

export { CheesePizza }