export class Stereo {
	volume
	cd

	on() {
		console.log('Stereo on!')
	}

	off() {
		console.log('Stereo off!')
	}

	setCD(cd) {
		this.cd = cd
		console.log(`Stereo Set CD : ${this.cd}`)
	}

	setVolume(volume) {
		this.volume = volume
		console.log(`Stereo Set ${this.volume}`)
	}
}