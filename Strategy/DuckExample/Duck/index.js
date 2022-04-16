import { FlyBehavior } from './FlyBehavior/index.js';
import { QuackBehavior } from './QuackBehavior/index.js';

class Duck {
	FlyBehavior;
	QuackBehavior
	constructor() {
		this.FlyBehavior = new FlyBehavior();
		this.QuackBehavior = new QuackBehavior();
	}

	swim() {
		console.log('swin')
	}

	display() {
		console.log('display')
	}

	performQuack() {
		console.log('perform quack')
	}

	performFly() {
		console.log('perform fly')
	}

	setFlyBehavior(newBehavior) {
		this.FlyBehavior = newBehavior;
	}

	setQuackBehavior(newBehavior) {
		this.QuackBehavior = newBehavior;
	}
}

export { Duck }