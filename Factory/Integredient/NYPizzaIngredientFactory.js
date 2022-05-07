import { PizzaIngredientFactory } from "./PizzaIngredientFactory.js";

class NYPizzaIngredientFactory extends PizzaIngredientFactory{
	createCheese() {
		return '풍미가 강한 취즈'
	}
	createDough() {
		return '바삭한 도우'
	}
	createPepperoni() {
		return '육즙이 터지는 페퍼로니'
	}
	createSauce() {
		return '달콤한 소스'
	}
	createVeggies() {
		return ['매콤한 양파', '새송이 버섯']
	}
}

export { NYPizzaIngredientFactory }