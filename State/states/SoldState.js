import { State } from './State.js';

export class SoldState extends State {
  /** @param {import('../GumballMachine.js').GumballMachine} machine */
  constructor(machine) {
    super();
    this.machine = machine;
  }
  insertQuarter() {
    console.log('알맹이를 내보내고 있습니다.');
  }
  ejectQuarter() {
    console.log('이미 알맹이를 뽑고 있습니다.');
    this.machine.setState(this.machine.getNoQuarterState());
  }
  turnCrank() {
    console.log('손잡이는 한번만 돌려도 됩니다.');
    this.machine.setState(this.machine.getSoldState());
  }
  dispense() {
    this.machine.releaseBall();
    if (this.machine.cnt > 0) {
      this.machine.setState(this.machine.getNoQuarterState());
    } else {
      this.machine.setState(this.machine.getSoldOutState());
    }
  }
}
