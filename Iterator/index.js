import { BreakfastMenu } from './BreakfastMenu.js';
import { DinnerMenu } from './DinnerMenu.js';
import { LaunchMenu } from './LaunchMenu.js';

const launch = new LaunchMenu();
const breakfast = new BreakfastMenu();
const dinner = new DinnerMenu();
launch.printMenu();
breakfast.printMenu();
dinner.printMenu();
