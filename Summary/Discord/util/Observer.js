export class Observer {
  constructor() {
    this.observer = new Set();
  }
  /** @type {Set} */
  observer
  
  addObserver(obs) {
    this.observer.add(obs);
  }

  removeObserver(obs) {
    this.observer.delete(obs)
  }

  notifyObserver() {
    this.observer.forEach((obs) => {
      obs.update()
    })
  }
}