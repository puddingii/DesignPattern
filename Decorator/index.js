import { Mocha } from './ingredients/Mocha.js'
import { Shot } from './ingredients/Shot.js'
import { DarkRoast } from './coffee/DarkRoast.js'

let darkRoast = new DarkRoast();
// darkRoast = new Mocha(darkRoast);
// darkRoast = new Mocha(darkRoast);
// console.log(darkRoast.getDescription(), darkRoast.cost())

const KR = 1263.49;
const mochaBtn = document.getElementById('mochaBtn')
const shotBtn = document.getElementById('shotBtn')
const coffeeValue = document.getElementById('coffeeValue')
const coffeeIngredient = document.getElementById('coffeeIngredient')
const coffeeKrValue = document.getElementById('coffeeKrValue')

/**
 * @param {Number} cost
 * @retunrs {String}
*/
const convertToKr = (cost) => {
	return `${_.chain(cost).multiply(KR).round().toString()}원`;
}

if(coffeeValue && coffeeIngredient && coffeeKrValue) {
	// @ts-ignore
	coffeeValue.innerText = `$${_.round(darkRoast.cost(), 2).toString()}`;
	coffeeIngredient.innerText = darkRoast.getDescription();
	coffeeKrValue.innerText = convertToKr(darkRoast.cost());
}

mochaBtn?.addEventListener('click', () => {
	darkRoast = new Mocha(darkRoast);
	if(coffeeValue && coffeeIngredient && coffeeKrValue) {
		// @ts-ignore
		coffeeValue.innerText = `$${_.round(darkRoast.cost(), 2).toString()}`;
		coffeeIngredient.innerText = darkRoast.getDescription();
		coffeeKrValue.innerText = convertToKr(darkRoast.cost());
	}
})

shotBtn?.addEventListener('click', () => {
	darkRoast = new Shot(darkRoast);
	if(coffeeValue && coffeeIngredient && coffeeKrValue) {
		// @ts-ignore
		coffeeValue.innerText = `$${_.round(darkRoast.cost(), 2).toString()}`;
		coffeeIngredient.innerText = darkRoast.getDescription();
		coffeeKrValue.innerText = convertToKr(darkRoast.cost());
	}
})