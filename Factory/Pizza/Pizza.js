class Pizza {
	name
	dough
	sauce
	cheese
	pepperoni
	toppings = []

	constructor() {}

	prepare() {}

	bake() {
		console.log('굽는 중....')
	}

	cut() {
		console.log('자르는 중');
	}

	box() {
		console.log('포장하는 중')
	}

	setName(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

export { Pizza }