import { ChocolateFactory } from "./ChocolateFactory.js";

const factory1 = new ChocolateFactory()
console.log(factory1.getCnt())

const factory2 = new ChocolateFactory()
console.log(factory2.getCnt())

console.log(factory1.getEmpty())
console.log(factory2.getEmpty())

setTimeout(()=> {
	factory1.setEmpty(false)
}, 2000)

setTimeout(() => {
	console.log(factory2.getEmpty())
}, 2500)