class Observer {
  constructor() {
    this.observer = new Set();
  }

  addObserver(obs) {
    this.observer.add(obs);
  }

  removeObserver(obs) {
    this.observer.delete(obs);
  }

  notifyObserver() {
    this.observer.forEach((ob) => {
      ob.update();
    });
  }
}

export { Observer };
