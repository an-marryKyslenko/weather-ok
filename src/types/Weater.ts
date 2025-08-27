export type Weather = {
	city: string,
	weather: string,
	temperature: number;
	description: string; 
	humidity: number; 
	windSpeed: number;
	icon?: string;
}

export type WeatherResponse = {
	name: string;
	main: {
		temp: number;
		humidity: number;
	};
	weather: {
		main:string,
		description: string;
		icon: string;
	}[];
	wind: {
		speed: number;
	};
};