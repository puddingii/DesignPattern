import { Light } from "./class/Light.js";
import { Stereo } from "./class/Stereo.js";
import { LightCommand } from "./commands/LightCommand.js";
import { StereoCommand } from "./commands/StereoCommad.js";
import { RemoteControl } from "./Remote.js";

const livingRoomLight = new Light('Living Room')
const kitchenRoomLight = new Light('Kitchen Room')
const stereo = new Stereo()

const livingLightOnCommand = new LightCommand('on', livingRoomLight)
const livingLightOffCommand = new LightCommand('off', livingRoomLight)
const kitchenLightOnCommand = new LightCommand('on', kitchenRoomLight)
const kitchenLightOffCommand = new LightCommand('off', kitchenRoomLight)
const stereoOnCommand = new StereoCommand('on', stereo)
const stereoOffCommand = new StereoCommand('off', stereo)

const remoteController = new RemoteControl()
remoteController.setCommand(0, livingLightOnCommand, livingLightOffCommand)
remoteController.setCommand(1, kitchenLightOnCommand, kitchenLightOffCommand)
remoteController.setCommand(2, stereoOnCommand, stereoOffCommand)

remoteController.onButtonClick('on', 1)
remoteController.onButtonClick('off', 1)
remoteController.onButtonClick('on', 2)
remoteController.onButtonClick('on', 0)
remoteController.onButtonClick('on', 1)
remoteController.onButtonClick('off', 0)
remoteController.onButtonClick('off', 2)
remoteController.getUndoList()

remoteController.onUndoButton()
remoteController.onButtonClick('off', 2)
remoteController.onUndoButton()
remoteController.onUndoButton()
remoteController.getUndoList()
