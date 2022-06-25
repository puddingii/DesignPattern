import { State } from './State.js';

export class HasQuarterState extends State {
  /** @param {import('../GumballMachine.js').GumballMachine} machine */
  constructor(machine) {
    super();
    this.machine = machine;
  }
  insertQuarter() {
    console.log('동전을 넣었음.');
  }
  ejectQuarter() {
    console.log('동전을 뱉었음');
    this.machine.setState(this.machine.getNoQuarterState());
  }
  turnCrank() {
    console.log('손잡이를 돌렸음!!');
    const isWinner = Math.floor(Math.random() * 10) === 0;
    if (isWinner) {
      console.log('오우 두번 얻을 수 있는 기회가 생김!');
      this.machine.setState(this.machine.getWinnerState());
    } else {
      this.machine.setState(this.machine.getSoldState());
    }
  }
  dispense() {
    console.log('공 못뱉음...손잡이를 돌리셈!');
  }
}
