import axios from 'axios';

const API_KEY='b3701d6eb4b07cd44c080031d6f33008';

export const GET_WEATHER='GET_WEATHER';

export function loadWeatherInfo(cityName){
  const url=`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},au&units=metric&appid=${API_KEY}`;
  const request=axios.get(url);
  return function(dispatch) {
    request.then(function(response) {
      dispatch({
        type: GET_WEATHER,
        payload: response
      });
    });
  };
}
