import React, { Component } from 'react';

class WeatherListItem extends Component {
    constructor(props){
        super(props);
        this.showCurrentDay = this.showCurrentDay.bind(this);
    }
    getWeekday(date) {
        const dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekday = date.getDay();
        return dayNames[weekday];
      }

    showCurrentDay(){
        const index=this.props.index;
        const onDayClick=this.props.onDayClick;
        onDayClick(index);
    }
    render(){
    
        const {day} = this.props;
        const date = new Date(day.dt * 1000);
        const weekday = this.getWeekday(date);
        const {city} = this.props;
        return (
            <div className="weather-list-item" onClick={this.showCurrentDay}>
                <h2>{date.getMonth() + 1} / {date.getDate()}</h2>
                <h3>{weekday}</h3>
                <h3>{day.temp.min.toFixed(1)}&deg;F &#124; {day.temp.max.toFixed(1)}&deg;F</h3>
            </div> 
        )     
  } 
}

export default WeatherListItem;