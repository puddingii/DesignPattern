import { Stock } from "./contents/Stock";
import { User } from "./User";

export class Discord {
    constructor() { 
      const user = new User('건영');
    //   const enhanceManager = new Enhance();
      const stockManager = new Stock(user, { name : 'test'});
    //   const autoPManager = new AutoP();
      
    }
  }