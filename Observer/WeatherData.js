import { Observer } from './Observer.js';

class WeatherData extends Observer {
  constructor(temperature = 0, humidity = 0, pressure = 0) {
    super();
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
  }

  setData(temperature = 0, humidity = 0, pressure = 0) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObserver();
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  getPressure() {
    return this.pressure;
  }
}

export { WeatherData };
