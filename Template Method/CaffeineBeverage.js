export class CaffeineBeverage {
  prepareRecipe() {
    this.beforeService();
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
    this.afterService();
  }
  boilWater() {
    console.log('물 끓이는 중...');
  }
  pourInCup() {
    console.log('컵에 따르는 중...');
  }
  brew() {}
  addCondiments() {}
  afterService() {}
  beforeService() {}
}
