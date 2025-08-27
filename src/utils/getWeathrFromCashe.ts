import type { Weather } from "../types/Weater";

const CACHE_KEY = 'weatherCache';
const CACHE_DURATION = 10 * 60 * 1000;

type CacheEntry =  {
	data: Weather;
	timestamp: number;
}

export function getFromCache(city: string): Weather | null {
	const raw = localStorage.getItem(CACHE_KEY);
	if (!raw) return null;

	const cache: Record<string, CacheEntry> = JSON.parse(raw);
	const entry = cache[city.toLowerCase()];
	if (!entry) return null;
	if (Date.now() - entry.timestamp > CACHE_DURATION) {
		delete cache[city.toLowerCase()];
		localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
		return null;
	}
	return entry.data;
}

export function saveToCache(city: string, data: Weather) {
	const raw = localStorage.getItem(CACHE_KEY);
	const cache: Record<string, CacheEntry> = raw ? JSON.parse(raw) : {};
	cache[city.toLowerCase()] = { data, timestamp: Date.now() };
	localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}