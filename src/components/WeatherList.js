import React, { Component } from 'react';
import WeatherListItem from './WeatherListItem';

class WeatherList extends Component {
    render(){
        const { days, city } = this.props;

        return( 
            <div className="weather-list flex-parent">
                { days.map((day, index) => 
                <WeatherListItem 
                key={day.dt} 
                day={day} 
                city={city}
                index={index} 
                onDayClick={this.props.onDayClick}
                /> 
            )}
        
            </div>
        );//days.map is mapping over array
        
    }
}

export default WeatherList;