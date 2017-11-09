import React, { Component } from "react";

class SavedList extends Component {
    render () {
        <div className="savedArticles">
            <h2> Saved Articles</h2>
            <ul className="savedList">
                {this.props.children}
            </ul>
        </div>
    }
}
export default SavedList;