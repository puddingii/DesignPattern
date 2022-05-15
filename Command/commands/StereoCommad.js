export class StereoCommand {
	constructor(type, stereo) {
		this.stereo = stereo
		this.type = type
	}

	execute() {
		switch(this.type) {
			case 'on':
				this.onStereo()
				break
			case 'off':
				this.offStereo()
				break
			default:
		}
	}

	onStereo() {
		this.stereo.on()
		this.stereo.setCD('Pop Song')
		this.stereo.setVolume(200)
	}

	offStereo() {
		this.stereo.setCD('Nothing')
		this.stereo.off()
	}

	undo() {
		if(this.type === 'on') {
			this.offStereo()
		} else {
			this.onStereo()
		}
	}
}