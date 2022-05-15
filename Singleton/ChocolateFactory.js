export class ChocolateFactory {
	static instance

	#empty = true
	#cnt = 0

	constructor() {
		if(ChocolateFactory.instance) {
			ChocolateFactory.instance.#cnt++
			return ChocolateFactory.instance
		}

		ChocolateFactory.instance = this
	}

	setEmpty(isEmpty) {
		this.#empty = isEmpty
	}

	getEmpty() {
		return this.#empty
	}

	getCnt() {
		return this.#cnt
	}
}