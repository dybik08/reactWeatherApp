import React, {Component} from 'react';
import Cookies from 'universal-cookie';




export default (props) => {
    if(props.weather.length == 0){
        return <div>Loading...</div>;
    }

    let citiesList = props.cities;

//    const onPickCityClick = (city) => {
//        return props.pickedCities(city)
//    };
//
//    const onRemoveFromPickCityClick = (city) => {
//        return props.removeFromPickedCities(city)
//    };



//    const onAddToFavouriteClick = (cityName) => {
//        return props.addToFavourite(cityName);
//    }
//
//    const onRemoveFromFavouriteClick = (cityName) => {
//        return props.removeFromFavourite(cityName);
//    }

    const renderCities = (city) => {
        const cookies = new Cookies();
        const {
        weather,
        pickedCitiesList,
        } = props;


        const citiesFromCookies = cookies.get('cities') || [];
        const allCities = weather.map(name => name.city.name)

        const onFavouriteClick = (cityName) => {
            if (citiesFromCookies.find((cityInCookies) => cityInCookies === city)){
                return props.removeFromFavourite(cityName);
            } else {
                return props.addToFavourite(cityName);
            }
        }

        const onCityClick = (city) => {
            if(pickedCitiesList.find((cityInPickedCities) => cityInPickedCities === city)){
                return props.removeFromPickedCities(city);
            } else {
                return props.pickedCities(city);
            }
        }

        let picked = false;
        if (pickedCitiesList.find((cityInPickedCities) => cityInPickedCities === city)){
                picked = true
        } else {
            picked = false
        }

        if (citiesFromCookies.find((cityInCookies) => cityInCookies === city)){
                weather.fav = true
        } else {
            weather.fav = false
        }

        return(
            <div key={city} className="btn-group-sm d-block">

                <button className={`btn btn-secondary col-md-8 ${picked ? 'btn-success' : 'btn-danger'}`}  onClick={onCityClick.bind(this, city)} type="button">{city}</button>

                <button className={`btn  ${weather.fav ? 'btn-success' : 'btn-danger'}`} onClick={onFavouriteClick.bind(this, city)} type="button">
                    <i className="fas fa-star"  />
                </button>

            </div>
            );
    }



    return(
            <div className="">
            {citiesList.map(renderCities)}
            </div>
        );
    }


