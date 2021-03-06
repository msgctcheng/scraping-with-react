import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
        <div className="searchBox">
            <h2> Search NYT </h2>
            <h3> Search Term: </h3> 
            <input type="text" className="searchTerm" placeholder="Enter search term" value={this.props.value} onChange={this.props.handleInputChange} name="term"/>
            <button className="searchButton" onClick={this.props.handleSubmit}> Search </button>
        </div>);
    }
}

export default Search;

