/** @abstract */
class Beverage {
	descriptor = '제목 없음';
	size = 'TALL'

	getDescription() {
		return this.descriptor;
	}

	setSize(size) {
		this.size = size;
	}

	getSize() {
		return this.size;
	}

	/** @abstract */
	cost() {}
}

export { Beverage };