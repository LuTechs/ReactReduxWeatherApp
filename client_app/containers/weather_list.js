import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{
  renderWeather(cityData){
      const name=cityData.city.name;
      const temps=cityData.list.map(weather=>weather.main.temp);
      const pressure=cityData.list.map(pressure=>pressure.main.pressure);
      const humidity=cityData.list.map(humidity=>humidity.main.humidity);
      const {lon,lat}=cityData.city.coord;

      return (<tr key={name}>
                  <td>{name}</td>
                  <td><Chart data={temps} colour="red" unit="c"/></td>
                  <td><Chart data={pressure} colour="blue" unit="hPa"/></td>
                  <td><Chart data={humidity} colour="green" unit="%"/></td>
              </tr>
      );
  }
  render(){
      return (
          <table className="table table-hover">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Temperature </th>
                  <th>Pressure</th>
                  <th>Humidity</th>
                </tr>
              </thead>
              <tbody>
                {this.props.weather.map(this.renderWeather)}
              </tbody>
          </table>

      );

  }
}
function mapStateToProps({weather}){
  return {weather};
}
export default connect(mapStateToProps)(WeatherList);
