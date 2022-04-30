/** @abstract */
class Beverage {
	descriptor = '제목 없음';

	getDescription() {
		return this.descriptor;
	}

	/** @abstract */
	cost() {}
}

export { Beverage };