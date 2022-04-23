class HumanData {
	constructor(weight = 0, height = 0) {
		this.weight = weight;
		this.height = height;
	}

	update({ weight = 0, height = 0}) {
		this.weight = weight;
		this.height = height;
		console.log('Update Human Data!');
	}
}

export { HumanData };