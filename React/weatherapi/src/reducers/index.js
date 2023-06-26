import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';
//6.data will come here from 'WeatherReducer'. and then it'll go to store that is index.js
const rootReducer = combineReducers(
    {
     weatherData : WeatherReducer       
    }
);
export default rootReducer;