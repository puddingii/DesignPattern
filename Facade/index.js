import { Amplifier } from './class/Amplifier.js';
import { Projector } from './class/Projector.js';
import { Screen } from './class/Screen.js';
import { HomeTheaterFacade } from './HomeTheaterFacade.js';

const amp = new Amplifier();
const projector = new Projector();
const screen = new Screen();

const homeController = new HomeTheaterFacade(amp, projector, screen);

console.log('영화를 보러 가자!');

homeController.watchMovie();

console.log('영화 끝!');

homeController.endMovie();
