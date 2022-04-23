class WeatherCondition {
	constructor(weatherData) {
		this.weatherData = weatherData;
		this.weatherData.addObserver(this);
		console.log(this.weatherData, this);
	}

	update(temperature, humidity, pressure) {
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
		this.display();
	}

	display() {
		console.log(`${this.temperature}, ${this.humidity}, ${this.pressure}`);
	}
}

export { WeatherCondition };