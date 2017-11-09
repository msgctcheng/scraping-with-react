import React, { Component } from "react";

class Saved extends Component {
    render() {
        return (
            <li classNamed="savedArt">
                <h3>{this.props.title}</h3>
                <p>{this.props.datePosted}</p>
                <p> {this.props.link} </p>
                <button className="delButton" onClick={this.handleDelete}> Delete </button>
            </li>
        )
    }
}

export default Saved;