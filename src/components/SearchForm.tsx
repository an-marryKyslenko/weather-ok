import React, { useEffect, useRef, useState, type FormEvent } from 'react'
import ErrorMessage from './ErrorMessage';
import { getWeather } from '../api/weatherAPI';
import LoadingSpinner from './Loading';
import type { Weather } from '../types/Weater';

type Props = {
	onSearch: (result: Weather | null) => void,
}
const SearchForm = React.memo(({onSearch}: Props) => {
	const [city, setCity] = useState('');
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [error, setError] = useState('');
	const [isLoading, setIsloading] = useState(false);

	useEffect(() => {
		if (!error) return;
		const timer = setTimeout(() => setError(''), 2000);
		return () => clearTimeout(timer);
	}, [error]);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		if(!city.trim()) {
			setError('Fill in the city!');
			onSearch(null);
			return;
		}

		setIsloading(true);

		try {
			const data = await getWeather(city.trim());
	
			onSearch(data);
			setError('');
		} catch (error) {
			const message = error instanceof Error ? error.message : 'Unknown error';
			setError(message);
			onSearch(null)
		} finally{
			setIsloading(false);
		}
	}

	return (
		<form className='flex flex-col sm:flex-row sm:w-md w-full gap-4 mb-4 relative' onSubmit={handleSubmit}> 
			<input 
				ref={inputRef}
				value={city} 
				onChange={(e) => setCity(e.target.value)} 
				type="text" 
				className={`p-4 border max-w-full rounded-xl ${error && 'border-red-700'}`}
			/>
			<button 
				type='submit'
				disabled={isLoading}
				className='bg-red-700 hover:bg-red-400 w-full sm:w-30 t3ransition-colors duration-300 p-4 rounded-xl text-white font-bold'
			>
				{isLoading ? <LoadingSpinner/> : 'Search'}
			</button>
			<ErrorMessage message={error}/>
		</form>
	)
})

export default SearchForm