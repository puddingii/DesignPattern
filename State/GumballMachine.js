import { HasQuarterState } from './states/HasquarterState.js';
import { NoQuarterState } from './states/NoQuarterState.js';
import { SoldOutState } from './states/SoldOutState.js';
import { SoldState } from './states/SoldState.js';
import { Winner } from './states/Winner.js';

export class GumballMachine {
  constructor(cnt) {
    this.hasQuarterState = new HasQuarterState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.soldOutState = new SoldOutState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new Winner(this);

    this.cnt = cnt;
    this.state = this.hasQuarterState;
    if (this.cnt > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }
  setState(state) {
    this.state = state;
  }
  getHasQuarterState() {
    return this.hasQuarterState;
  }
  getNoQuarterState() {
    return this.noQuarterState;
  }
  getSoldOutState() {
    return this.soldOutState;
  }
  getSoldState() {
    return this.soldState;
  }
  getWinnerState() {
    return this.soldState;
  }
  insertQuarter() {
    this.state.insertQuarter();
  }
  ejectQuarter() {
    this.state.ejectQuarter();
  }
  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }
  releaseBall() {
    console.log('알맹이를 내보내고 있음');
    if (this.cnt > 0) {
      this.cnt--;
    } else {
      console.log('알맹이가 없음');
    }
  }
}
