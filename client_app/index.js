import "babel-polyfill";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import SearchBar from './components/search_bar';
const rootEl = document.getElementById('root');
class App extends Component {

  render() {
    return ( <div>
              <SearchBar/>
              
            </div>
    );
  }
}

ReactDOM.render( < App/> , rootEl);
