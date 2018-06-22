import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import {addToFavourite, removeFromFavourite, removeButtonVisible} from '../actions/favourite';
import {bindActionCreators} from 'redux';
import Cookies from 'universal-cookie';
import _ from 'lodash';
import PickedCitiesChart from '../components/pickedCitiesChart';





class WeatherList extends Component {

    render(){
        return (
            <div className="col-md-9">
                <table className="table table-hover">
                     <thead>
                         <tr>
                           <th className="col-md-5">Temperature (K)</th>
                         </tr>
                     </thead>
                     <tbody className="col-md-12">
                        <PickedCitiesChart pickedCities={this.props.pickedCities} weather={this.props.weather} />
                     </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({ weather, pickedCities }){

    return {
    weather,
    pickedCities,
    };
}
function mapDispatchToProps(dispatch){
    return {
        addToFavourite: city => dispatch(addToFavourite(city)),
        removeFromFavourite: city => dispatch(removeFromFavourite(city)),
        removeButtonVisible: city => dispatch(removeButtonVisible(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);