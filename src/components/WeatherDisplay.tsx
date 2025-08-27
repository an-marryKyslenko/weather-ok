import type { Weather } from '../types/Weater'
import { FaLocationArrow } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import { FiWind } from "react-icons/fi";
import { weatherBackgrounds } from '../styles/weatherBackgrounds';

const WeatherDisplay = ({windSpeed, city, temperature, weather, icon, description, humidity}: Weather) => {
	const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
	const bgClass = weatherBackgrounds[weather] || 'bg-gray-200';
	
	return (
		<article className={`p-6 bg-white ${bgClass} rounded-2xl shadow-xl md:max-w-md space-y-4`}>
			<h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
				<FaLocationArrow />
				<span>{city}</span>
			</h2>

			<div className="flex items-center gap-4">
				<img src={iconUrl} alt={description} className="w-16 h-16" />
				<span className="text-5xl font-bold text-white">
					{Math.floor(temperature)}&deg;C
				</span>
			</div>

			<p className="text-lg text-gray-600 capitalize">{description}</p>

			<div className="flex flex-col gap-1 text-gray-700">
				<p className="flex items-center gap-2">
					<FiWind className="text-cyan-500" />
					<span>{windSpeed} м/с</span>
				</p>
				<p className="flex items-center gap-2">
					<IoWaterOutline className="text-blue-400" />
					<span>{humidity}%</span>
				</p>
			</div>
			</article>

	)
}

export default WeatherDisplay