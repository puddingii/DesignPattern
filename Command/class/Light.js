export class Light {
	constructor(name) {
		this.name = name
	}

	on() {
		console.log(`${this.name} Light on!`)
	}

	off() {
		console.log(`${this.name} Light off!`)
	}
}