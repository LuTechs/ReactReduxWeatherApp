import React, {Component} from 'react';

class SearchBar extends Component{
  render(){
      return (
        <div className="input-group">
           <input type="text" className="form-control" placeholder="Search for city..."/>
           <span className="input-group-btn">
             <button className="btn btn-default" type="button">Add</button>
           </span>
         </div>
      );
  }
}
export default SearchBar;
