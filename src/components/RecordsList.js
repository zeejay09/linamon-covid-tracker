import React, { Component } from "react";

class RecordsList extends Component {
    render() {
        return (
            <tr>
                <td>
                    { this.props.obj.first_name }
                </td>
                <td>
                    { this.props.obj.last_name }
                </td>
                <td>
                    { this.props.obj.email }
                </td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default RecordsList;
