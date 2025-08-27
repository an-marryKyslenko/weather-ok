import { useCallback, useState } from 'react'
import './App.css'
import type { Weather } from './types/Weater';
import WeatherDisplay from './components/WeatherDisplay';
import SearchForm from './components/SearchForm';

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);

  const handleSubmit = useCallback((result: Weather | null) => {
    setWeather(result)
  }, [])

  return (
    <div className='bg-red-100 min-h-[100vh]'>
      <main className='max-w-[1200px] mx-auto my-0 p-4 '>
        <h1 className='text-red-700 font-bold text-2xl'>WeatherOk</h1>
        <SearchForm onSearch={handleSubmit}/>
        
        {weather && (
          <WeatherDisplay {...weather}/>
        )}
      </main>
    </div>
  )
}

export default App
