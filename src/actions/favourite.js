import Cookies from 'universal-cookie';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const ADD_TO_GRAPH = 'ADD_TO_GRAPH';

let cities;
let cookies;

export function addToFavourite(cityName) {
    cookies = new Cookies();
    cities = cookies.get('cities') || [];
    if (!cities.find((city) => city === cityName)){
        cities.push(cityName)
        cookies.set('cities', cities, { path: '/'});
    }

    return {
        type: ADD_FAVOURITE,
        cityName,

    };
}

export function removeFromFavourite(cityName){
    cookies = new Cookies();
    cities = cookies.get('cities') || [];
    if (cities.find((city) => city === cityName)){
        let index = cities.indexOf(cityName)
        cities.splice(index, 1)
        cookies.set('cities', cities, { path: '/'});
    }


    return{
        type: REMOVE_FAVOURITE,
        cityName,
    };
}

