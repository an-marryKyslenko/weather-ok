import axios from "axios";
import type { Weather, WeatherResponse } from "../types/Weater";
import type { GeoData } from "../types/Geo";
import { getFromCache, saveToCache } from "../utils/getWeathrFromCashe";

const API = axios.create({
	baseURL: 'https://api.openweathermap.org',
})

export const getWeather = async (city: string): Promise<Weather> => {
	const key = city.trim().toLowerCase();
	const cached = getFromCache(key);
	if (cached) return cached;

	const LIMIT = import.meta.env.VITE_OPENWEATHER_LIMIT;
	const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

	const {data: geoData} = await API.get<GeoData[]>(`/geo/1.0/direct?q=${city}&limit=${LIMIT}&appid=${API_KEY}`);

	if(!geoData || geoData.length === 0) {
		throw new Error('City doen\'t exist!')
	}

	const {lon, lat, name} = geoData[0];

	const {data: weatherData} = await API.get<WeatherResponse>(`/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);

	if(!weatherData) {
		throw new Error('Fail to show weather!')
	}

	const [weather] = weatherData.weather;

	const result = {
		city: name,
		weather: weather.main,
		temperature: weatherData.main.temp,
		description: weather.description,
		humidity: weatherData.main.humidity,
		windSpeed: weatherData.wind.speed,
		icon: weather.icon,
	};

	saveToCache(key, result);

	return result;
}