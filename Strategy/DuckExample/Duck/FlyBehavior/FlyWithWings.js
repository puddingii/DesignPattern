import { FlyBehavior } from './index.js';

class FlyWithWings extends FlyBehavior {
	fly() {
		console.log('I can fly with wings.');
	}
}

export { FlyWithWings }