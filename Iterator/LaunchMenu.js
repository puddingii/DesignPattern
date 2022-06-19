import { MyIterator } from './Iterator.js';

export class LaunchMenu extends MyIterator {
  constructor() {
    super();
    this.myMenu = new Map();
    this.myMenu.set('pizza', '피자');
    this.myMenu.set('pizza', '치즈피자');
    this.myMenu.set('spaghetti', '치즈오븐스파게뤼');
  }

  printMenu() {
    const iterator = this.printMyMenu();
    console.log('점심메뉴임다!');
    while (true) {
      const menu = iterator.next();
      if (menu.done) {
        return;
      }
      console.log(menu.value);
    }
  }
}
