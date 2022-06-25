export class Duck {
  constructor(name, hungry) {
    this.name = name;
    this.hungry = hungry ?? 50;
  }

  quack() {
    console.log('꽥꽥');
    this.hungry -= 5;
  }

  fly() {
    console.log('오리날다~');
    this.hungry -= 10;
  }

  eat() {
    console.log('밥 먹는중...');
    this.hungry += 10;
  }
}
