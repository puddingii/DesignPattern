import { QuackBehavior } from './index.js';

class MuteQuack extends QuackBehavior {
	quack() {
		console.log('Mute Quack...');
	}
}

export { MuteQuack };