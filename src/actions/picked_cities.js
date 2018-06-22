export const PICKED_CITIES = 'PICKED_CITIES';
export const REMOVE_FROM_PICKED_CITIES = 'REMOVE_FROM_PICKED_CITIES';


export function pickedCities(city){
    return {
        type: PICKED_CITIES,
        city,

    };
}

export function removeFromPickedCities(city){
    return{
        type: REMOVE_FROM_PICKED_CITIES,
        city,
    };
}