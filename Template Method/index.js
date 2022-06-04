import { Coffee } from './Coffee.js';
import { Tea } from './Tea.js';

const tea = new Tea();
const coffee = new Coffee();

console.log('티를 준비합니다!');
tea.prepareRecipe();

console.log('\n');

console.log('커피를 준비합니다!');
coffee.prepareRecipe();
