import React,{Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
const WeatherLocation = () => (
    <div>
        <Location city={"Rio de janeiro"} />
        <WeatherData />
    </div>
);


export default WeatherLocation;