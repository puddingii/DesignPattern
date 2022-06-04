import { CaffeineBeverage } from './CaffeineBeverage.js';

export class Coffee extends CaffeineBeverage {
  constructor() {
    super();
  }

  brew() {
    console.log('찻잎을 우려내는 중...');
  }

  addCondiments() {
    console.log('레몬을 추가하는 중...');
  }
  beforeService() {
    console.log('진동벨 가져가세요!');
  }
}
