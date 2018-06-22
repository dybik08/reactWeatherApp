import { PICKED_CITIES, REMOVE_FROM_PICKED_CITIES } from '../actions/picked_cities';
import Cookies from 'universal-cookie';

        const cookies = new Cookies();
        const cities = cookies.get('cities') || [];


export default function(state = cities, action){
    switch(action.type){
    case PICKED_CITIES:
        if (state.find((city) => city === action.city)){
            return state;
        }else {
           return [action.city, ...state]
        }
    case REMOVE_FROM_PICKED_CITIES:
        return state.filter((city) => city !== action.city);
    }
    return state;
}
