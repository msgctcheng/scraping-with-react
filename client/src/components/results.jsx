import React, { Component } from "react";

class Results extends Component {
    render () {
        return (
            <div className="result-wrapper">
                <h2> Search Results: </h2>
                <p> {this.props.children} </p>
            </div>
        )
    }
}
export default Results;