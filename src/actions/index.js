import axios from 'axios';

const API_KEY = '88c96a9b6e1db4842e74d2128edb476f';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const response = axios.get(url);

    return {
        payload: response,
        type: FETCH_WEATHER,
    };
}