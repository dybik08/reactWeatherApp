import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import CitiesContainer from '../containers/cities_container';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CitiesContainer />
        <WeatherList />
      </div>
    );
  }
}
