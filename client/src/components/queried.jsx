import React, { Component } from "react";

class Queried extends Component {
    render() {
        return (
                <li className="queriedArt">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.datePosted}</p>
                    <p> {this.props.link} </p>
                    <button className="subButton" onClick={this.props.handleSave}> Save </button>
                </li>
        );
    }
}