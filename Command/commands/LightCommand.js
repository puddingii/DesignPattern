export class LightCommand {
	constructor(type, light) {
		this.type = type
		this.light = light
	}

	execute() {
		switch(this.type) {
			case 'on':
				this.light.on()
				break
			case 'off':
				this.light.off()
				break
			default:
		}
	}

	undo() {
		if(this.type === 'on') {
			this.light.off()
		} else {
			this.light.on()
		}
	}
}