import React, { Component } from "react";

class SavedList extends Component {
    render () {
        <div className="savedArticles">
            <h2> Saved Articles</h2>
            <ol className="savedList">
                {this.props.children}
            </ol>
        </div>
    }
}
export default SavedList;