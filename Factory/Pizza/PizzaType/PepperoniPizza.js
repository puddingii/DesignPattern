import { Pizza } from "../Pizza.js"

class PepperoniPizza extends Pizza {
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
		this.pepperoni = this.integredient.createPepperoni()
	}
}

export { PepperoniPizza }