import { MyIterator } from './Iterator.js';

export class DinnerMenu extends MyIterator {
  constructor() {
    super();
    this.myMenu = { 1: 'pizza', 2: 'spaghetti', 3: 'cheese stick' };
  }

  printMenu() {
    const iterator = this.printMyMenu();
    console.log('저녁메뉴임다!');
    while (true) {
      const menu = iterator.next();
      if (menu.done) {
        return;
      }
      console.log(menu.value);
    }
  }
}
