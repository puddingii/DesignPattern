export class Stock {
  /** @param {User} user */
  constructor(user, stockInfo) {
    this.price = 100_000
    this.cnt = 0
    this.stockInfo = stockInfo
    this.user = user
    this.user.addObserver(this)
  }
  myTime
  logList = []


  startIntervalTime() {
    this.myTime = setInterval(() => {
      if(this.cnt === 8640 || this.price === 0) {
          console.log('done! : ', this.stockInfo.name, this.cnt++, this.price);
          clearInterval(this.myTime)
      }
      const rnd = Math.random() // generate number, 0 <= x < 1.0
      let ratio = _.round(2 * volatility * rnd, 2);
      if (ratio > volatility)
        ratio -= (2 * volatility + 0.007);
      const change_amount = _.floor(this.price * ratio);
      this.price = this.price + change_amount;
      this.cnt++
      this.logList.push({ price: this.price, ratio })
    },5)
  }

  /** 파일이나 db에 저장하고 배열을 비워줌 */
  saveLogList() {
    const list = _.deepClone(this.logList)
    this.logList = []
    return list
  }
}