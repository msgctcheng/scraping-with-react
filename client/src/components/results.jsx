import React, { Component } from "react";

class Results extends Component {
    render () {
        return (
            <div className="result-wrapper">
                <h2> Search Results: </h2>
                <div> {this.props.children} </div>
            </div>
        )
    }
}
export default Results;