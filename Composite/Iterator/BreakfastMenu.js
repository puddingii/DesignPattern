import { MyIterator } from './Iterator.js';

export class BreakfastMenu extends MyIterator {
  constructor() {
    super();
    this.myMenu = new Set();
    this.myMenu.add('pizza');
    this.myMenu.add('spaghetti');
    this.myMenu.add('cheese stick');
  }

  printMenu() {
    const iterator = this.printMyMenu();
    console.log('아침메뉴임다!');
    while (true) {
      const menu = iterator.next();
      if (menu.done) {
        return;
      }
      console.log(menu.value);
    }
  }
}
