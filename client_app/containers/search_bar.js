import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {loadWeatherInfo} from '../actions/index';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={term:''};
    this.onFormSubmit=this.onFormSubmit.bind(this);
    this.onInputChange=this.onInputChange.bind(this);
    this.props.loadWeatherInfo('Melbourne');

  }

  onInputChange(event){
      this.setState({term:event.target.value});
  }
  onFormSubmit(event){
    event.preventDefault();
    this.props.loadWeatherInfo(this.state.term);
  }
  render(){
      return (
        <form className="input-group" onSubmit={this.onFormSubmit}>
           <input type="text"
                  value={this.state.term}
                  onChange={this.onInputChange}
                  className="form-control"
                  placeholder="Search for city..."/>
           <span className="input-group-btn">
             <button className="btn btn-default" type="submit">Add</button>
           </span>
         </form>
      );
  }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({loadWeatherInfo},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);
