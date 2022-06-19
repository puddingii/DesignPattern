import { Dessert } from '../Dessert.js';
import { MyIterator } from './Iterator.js';

export class DinnerMenu extends MyIterator {
  constructor() {
    super();
    this.myMenu = { 1: 'pizza', 2: 'spaghetti', 3: 'cheese stick' };
    this.subMenu = [new Dessert()];
  }

  printMenu() {
    const iterator = this.printMyMenu();
    console.log('저녁메뉴임다!');
    let menu;
    while ((menu = iterator.next())) {
      if (menu.done) {
        this.subMenu.forEach((menu) => {
          menu.printMenu();
        });
        return;
      }
      console.log(menu.value);
    }
    console.log('?');
  }
}
