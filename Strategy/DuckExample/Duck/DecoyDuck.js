import { Duck } from './index.js';
import { FlyNoWay } from './FlyBehavior/FlyNoWay.js';

class DecoyDuck extends Duck {
	constructor() {
		super();
		this.FlyBehavior = new FlyNoWay();
	}

	display() {
		console.log('Im decoy duck')
	}
}

export { DecoyDuck }