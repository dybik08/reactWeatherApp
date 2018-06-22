import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import PickedCitiesReducer from './reducer_picked_cities';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    pickedCities: PickedCitiesReducer,
});

export default rootReducer;
