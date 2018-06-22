import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Cookies from 'universal-cookie';
import CitiesList from '../components/cities_list';
import { pickedCities, removeFromPickedCities } from '../actions/picked_cities';
import {addToFavourite, removeFromFavourite, removeButtonVisible} from '../actions/favourite';

class CitiesContainer extends Component {
    constructor(props){
        super(props);
    }
    render() {
    const cities = this.props.weather.map((cityData) => cityData.city.name)
    const temps = this.props.weather.map((cityData) => cityData.list.map(temp => temp.main.temp))

    return (
            <div className="col-md-3">
                    <CitiesList
                    temps={temps}
                    cities={cities}
                    pickedCities={this.props.pickedCities.bind(this)}
                    removeFromPickedCities={this.props.removeFromPickedCities.bind(this)}
                    addToFavourite={this.props.addToFavourite.bind(this)}
                    removeFromFavourite={this.props.removeFromFavourite.bind(this)}
                    fav={this.props.weather.fav}
                    weather={this.props.weather}
                    pickedCitiesList={this.props.pickedCitiesList}
                    />
            </div>
        );
    }


}

function mapStateToProps({ weather, pickedCities }){

    return {
    weather,
    pickedCitiesList: pickedCities,
    };
}
function mapDispatchToProps(dispatch){
    return {
        pickedCities: city => dispatch(pickedCities(city)),
        removeFromPickedCities: city => dispatch(removeFromPickedCities(city)),
        addToFavourite: city => dispatch(addToFavourite(city)),
        removeFromFavourite: city => dispatch(removeFromFavourite(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer);