import React, { Component } from "react";

class QueriedList extends Component {
    render () {
        return (
            <div className="query-wrapper">
                <ul className="queriedList">
                {this.props.children}
                </ul>
            </div>
        )
    }
}
export default QueriedList;