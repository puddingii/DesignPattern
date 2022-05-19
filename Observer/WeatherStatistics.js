class WeatherStatistics {
  constructor(weatherData) {
    this.weatherData = weatherData;
    this.weatherData.addObserver(this);
    console.log(this.weatherData, this);
  }

  update() {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.pressure = this.weatherData.getPressure();
    this.display();
  }

  display() {
    console.log(`날씨통계: ${this.temperature}, ${this.humidity}, ${this.pressure}`);
  }
}

export { WeatherStatistics };
