import { NoCommand } from "./commands/NoCommand.js"

export class RemoteControl {
	onCommands = []
	offCommands = []
	undoCommands = []
	stack = []

	constructor() {
		for(let i = 0; i < 7; i++) {
			this.onCommands[i] = new NoCommand()
			this.offCommands[i] = new NoCommand()
		}
	}

	setCommand(slot, onCommand, offCommand) {
		this.onCommands[slot] = onCommand
		this.offCommands[slot] = offCommand
	}

	getUndoList() {
		console.log(this.undoCommands)
	}

	onButtonClick(type, slot) {
		this[`${type}Commands`][slot].execute()
		this.undoCommands.push(this[`${type}Commands`][slot])
	}

	onUndoButton() {
		if(this.undoCommands.length < 1) {
			console.log('No Undo Command')
			return
		}
		console.log('\n---Undo-ing---\n')
		this.undoCommands.pop().undo()
	}

	toString() {
		console.log('\n----- 리모컨 -----\n')
		this.onCommands.forEach((onCmd) => {
			console.log(`${onCmd.getName()}`)
		})
	}
}