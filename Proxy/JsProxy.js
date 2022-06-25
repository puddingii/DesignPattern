const stockList = [
  {
    name: '너이버',
    value: 10000,
    type: 'stock',
    amount: 1_000_000,
  },
  {
    name: '데음',
    value: 5000,
    type: 'stock',
    amount: 500_000,
  },
  {
    name: '규글',
    value: 30000,
    type: 'stock',
    amount: 10_000_000,
  },
  {
    name: '비츠코인',
    value: 100000,
    type: 'coin',
    amount: 1_000_000,
  },
  {
    name: '이다리움',
    value: 3000,
    type: 'coin',
    amount: 1_000_000,
  },
];
const STOCK_TYPES = ['coin', 'stock'];

const getStock = (stockInfo) => {
  return new Proxy(stockInfo, {
    set(stock, prop, value) {
      if (prop === 'value' || prop === 'amount') {
        if (!Number.isInteger(value)) {
          const errorLog = `The ${prop} is not an integer`;
          throw new TypeError(errorLog);
        }
      }

      if (prop === 'type') {
        if (!(value in STOCK_TYPES)) {
          throw new Error(
            'Stock type is invalid... Check valid stock types[coin, stock]'
          );
        }
      }

      stock[prop] = value;
      console.log('수정 성공!', stock);
      return true;
    },
  });
};

const STOCK_LIST = stockList.map((stock) => {
  return getStock(stock);
});

const myStock = new Proxy(STOCK_LIST, {
  set() {
    throw new Error('This object cannot be revised.');
  },
  get(stock, prop) {
    if (prop in stock) {
      return stock[prop];
    }

    if (prop === 'names') {
      return stock.map((info) => {
        return info.name;
      });
    }

    if (prop === 'types') {
      const types = new Set(
        stock.map((info) => {
          return info.type;
        })
      );
      return Array.from(types.values());
    }

    const stockInfo = stock.find((info) => {
      return info.name === prop;
    });
    if (stockInfo) {
      return stockInfo;
    }
  },
});

console.log(myStock[1]);
console.log(myStock.names);
console.log(myStock.types);
console.log(myStock.데음);

myStock.데음.value = 11111;
myStock.데음.value = 'hi';
