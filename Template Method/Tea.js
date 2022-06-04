import { CaffeineBeverage } from './CaffeineBeverage.js';

export class Tea extends CaffeineBeverage {
  constructor() {
    super();
  }
  brew() {
    console.log('필터로 커피 우려내는 중...');
  }
  addCondiments() {
    console.log('설탕과 우유를 추가하는 중...');
  }
  afterService() {
    console.log('직접 가져다주는 싸비스!');
  }
}
