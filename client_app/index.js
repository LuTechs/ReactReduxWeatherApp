import "babel-polyfill";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise,ReduxThunk)(createStore);

const rootEl = document.getElementById('root');
class App extends Component {
  render() {
    return ( <Provider store={createStoreWithMiddleware(reducers)}>
                <div>
                  <SearchBar/>
                  <WeatherList/>
                </div>
            </Provider>
    );
  }
}

ReactDOM.render( < App/> , rootEl);
