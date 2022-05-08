import { WeatherCondition } from './WeatherCondition.js';
import { WeatherData } from './WeatherData.js'
import { WeatherStatistics } from './WeatherStatistics.js';

const weatherData = new WeatherData(60, 60, 60);

const weatherCondition = new WeatherCondition(weatherData);
const weatherStatistics = new WeatherStatistics(weatherData);

weatherData.setData(30, 20, 10);
weatherData.setData(40, 20, 10);
weatherData.setData(50, 20, 10);

weatherData.removeObserver(weatherStatistics)

weatherData.setData(30, 20, 10);