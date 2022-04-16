import { QuackBehavior } from './index.js';

class Squeak extends QuackBehavior {
	quack() {
		console.log('Squeak');
	}
}

export { Squeak };