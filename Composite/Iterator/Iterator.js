export class MyIterator {
  myMenu;
  *printMyMenu() {
    try {
      yield* this.myMenu;
    } catch (e) {
      yield* Object.entries(this.myMenu);
    }
  }
}
