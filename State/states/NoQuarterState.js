import { State } from './State.js';

export class NoQuarterState extends State {
  /** @param {import('../GumballMachine.js').GumballMachine} machine */
  constructor(machine) {
    super();
    this.machine = machine;
  }
  insertQuarter() {
    console.log('동전을 넣었음.');
    this.machine.setState(this.machine.getHasQuarterState());
  }
  ejectQuarter() {
    console.log('아무커토 없는데 동전을 어찌뱉음');
  }
  turnCrank() {
    console.log('돌리기전에 동전을 먼저 집어넣으셈');
  }
  dispense() {
    console.log('공 못뱉음...손잡이를 돌리셈!');
  }
}
