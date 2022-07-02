export class Goose {
  constructor(gooseInfo) {
    this.name = gooseInfo.name;
  }
  honk() {
    console.log('구스구스홍홍홍');
  }
  getname() {
    return this.name;
  }
}
