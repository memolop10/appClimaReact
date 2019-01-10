import React ,{Component} from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'

const WeatherData = () => (
    <div>
    <WeatherTemperature 
    temperature={20} 
    weatherState={''}/>
    
    <WeatherExtraInfo huminity={80} wind={"10 m/s"}/>
    
    </div>
);

export default WeatherData;