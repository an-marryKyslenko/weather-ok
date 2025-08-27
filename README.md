# WeatherOk

A simple React + TypeScript weather application that lets you search for any city’s current weather. It features:

- City autocomplete via OpenWeather Geocoding API

- Current weather data (temperature, description, humidity, wind speed) via OpenWeather Current Weather API

- Dynamic background gradients based on weather conditions

- 10-minute caching of results in localStorage to reduce API calls

- Responsive layout with Tailwind CSS

- Loading spinner, auto-clearing error messages, and focus management

Demo
(demo link)[]

## Tech Stack
- React with Hooks

- TypeScript

- Axios for HTTP requests

- Tailwind CSS for utility-first styling

- OpenWeather Geocoding & Current Weather APIs

- LocalStorage for simple caching

## Getting Started

### Installation
Clone the repo

```bash
git clone https://github.com/your-username/weatherok.git
cd weatherok
npm install
```

### Environment Variables
Create a .env file in the project root with the following variables:

```env
VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key
VITE_OPENWEATHER_LIMIT=1
VITE_OPENWEATHER_API_KEY — your OpenWeather API key

VITE_OPENWEATHER_LIMIT — max number of geocoding results (default: 1)
```

### Running Locally
```bash
npm run dev 
```

Open http://localhost:5173 in your browser.

## END