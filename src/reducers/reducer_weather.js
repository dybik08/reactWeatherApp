import { FETCH_WEATHER } from '../actions/index';
import { ADD_FAVOURITE, REMOVE_FAVOURITE, ADD_TO_GRAPH } from '../actions/favourite';

export default function(state = [], action){
    switch(action.type){
    case FETCH_WEATHER:
        return [action.payload.data, ...state];

    case ADD_FAVOURITE:
        // find added city and mark as favourite
        return state.map(cityData =>
            cityData.city.name === action.cityName ?
            {...cityData, fav: true} : cityData
        );

    case REMOVE_FAVOURITE:
        return state.map(cityData =>
            cityData.city.name === action.cityName ?
            {...cityData, fav: false} : cityData
        );

    case ADD_TO_GRAPH:
    return [action.payload.tempsArray, ...state];
    }



    return state;
}