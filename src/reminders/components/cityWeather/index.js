import React from 'react';
import { FaCloudRain, FaCloud, FaSun, FaSnowflake } from 'react-icons/fa';
import { WeatherIcon } from './style';

export const CityWeather = ({ cityWeather, error }) => {
    if (!cityWeather) return null;
    if (error && error.weather) {
        return <div>{error.weather}</div>
    }

    const { main } = cityWeather.weather;
    switch (main) {
        case 'Rain':
            return <WeatherIcon>
                {main}
                <FaCloudRain />
            </WeatherIcon>;

        case 'Clouds':
            return <WeatherIcon>
                {main}
                <FaCloud />
            </WeatherIcon>

        case 'Clear':
            return <WeatherIcon>
                {main}
                <FaSun />
            </WeatherIcon>
        
        case 'Snow':
            return <WeatherIcon>
                {main}
                <FaSnowflake />
            </WeatherIcon>
    
        default:
            return <div>
                {main}
            </div>;
        }
    }