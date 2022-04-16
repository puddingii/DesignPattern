import { FlyBehavior } from './index.js';

class FlyNoWay extends FlyBehavior {
	fly() {
		console.log('I can not fly.')
	}
}

export { FlyNoWay }