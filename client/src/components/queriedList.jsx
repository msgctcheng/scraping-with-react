import React, { Component } from "react";

class QueriedList extends Component {
    render () {
        return (
            <ul className="queriedList">
                {this.props.children}
            </ul>
        )
    }
}
export default QueriedList;