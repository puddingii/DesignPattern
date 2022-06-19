import { MyIterator } from './Iterator/Iterator.js';

export class Dessert extends MyIterator {
  constructor() {
    super();
    this.myMenu = new Map();
    this.myMenu.set('pizza', '디절투');
    this.myMenu.set('pizza2', '디절원');
    this.myMenu.set('spaghetti', '디절쓰뤼');
  }

  printMenu() {
    const iterator = this.printMyMenu();
    console.log('디줠트임!');
    while (true) {
      const menu = iterator.next();
      if (menu.done) {
        return;
      }
      console.log(menu.value);
    }
  }
}
