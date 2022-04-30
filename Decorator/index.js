// @ts-nocheck
import { Mocha } from './ingredients/Mocha.js'
import { Shot } from './ingredients/Shot.js'
import { DarkRoast } from './coffee/DarkRoast.js'

let darkRoast = new DarkRoast();

const KR = 1263.49;
const mochaBtn = document.getElementById('mochaBtn')
const shotBtn = document.getElementById('shotBtn')
const sizeTallBtn = document.getElementById('sizeTall')
const sizeGrandeBtn = document.getElementById('sizeGrande')
const sizeVentiBtn = document.getElementById('sizeVenti')
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

const updateText = () => {
	if(coffeeValue && coffeeIngredient && coffeeKrValue) {
		coffeeValue.innerText = `$${_.round(darkRoast.cost(), 2).toString()}`;
		coffeeIngredient.innerText = darkRoast.getDescription();
		coffeeKrValue.innerText = convertToKr(darkRoast.cost());
	}
}

const toggleBtn = () => {
	mochaBtn.disabled = !mochaBtn.disabled
	shotBtn.disabled = !shotBtn.disabled
	sizeTallBtn.disabled = !sizeTallBtn.disabled
	sizeGrandeBtn.disabled = !sizeGrandeBtn.disabled
	sizeVentiBtn.disabled = !sizeVentiBtn.disabled
}

updateText()

mochaBtn?.addEventListener('click', () => {
	darkRoast = new Mocha(darkRoast);
	updateText()
})

shotBtn?.addEventListener('click', () => {
	darkRoast = new Shot(darkRoast);
	updateText()
})

sizeTallBtn?.addEventListener('click', () => {
	darkRoast.setSize('TALL')
	toggleBtn()
})

sizeGrandeBtn?.addEventListener('click', () => {
	darkRoast.setSize('GRANDE')
	toggleBtn()
})

sizeVentiBtn?.addEventListener('click', () => {
	darkRoast.setSize('VENTI')
	toggleBtn()
})