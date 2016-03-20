import { combineReducers } from 'redux';
import WeatherListReducer from './weather_list_reducer';
const rootReducer=combineReducers({
  weather:WeatherListReducer
});

export default rootReducer;
