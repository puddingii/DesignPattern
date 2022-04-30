import { Beverage } from '../Beverage.js';

class DarkRoast extends Beverage {
	constructor() {
		super();
		this.descriptor = '다크로스트 :'
	}

	cost() {
		return 4.8;
	}
}

export { DarkRoast }