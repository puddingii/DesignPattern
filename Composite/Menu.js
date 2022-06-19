import { LaunchMenu } from './Iterator/LaunchMenu.js';
import { BreakfastMenu } from './Iterator/BreakfastMenu.js';
import { DinnerMenu } from './Iterator/DinnerMenu.js';

export class Menu {
  constructor() {
    this.menuList = [];
    this.menuList.push(new BreakfastMenu());
    this.menuList.push(new LaunchMenu());
    this.menuList.push(new DinnerMenu());
  }

  print() {
    this.menuList.forEach((menu) => {
      menu.printMenu();
    });
  }
}
