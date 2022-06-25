import { State } from './State.js';

export class SoldOutState extends State {
  /** @param {import('../GumballMachine.js').GumballMachine} machine */
  constructor(machine) {
    super();
    this.machine = machine;
  }
  insertQuarter() {
    console.log('상품이 매진되었습니다.');
  }
  ejectQuarter() {
    console.log('뱉을 동전이 없습니다.');
  }
  turnCrank() {
    console.log('상품이 매진되었습니다.');
  }
  dispense() {
    console.log('내보낼수 없습니다.');
  }
}
