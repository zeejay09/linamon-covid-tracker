import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class RecordsListPui extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }

    delete = () => {
        axios.get('http://localhost/linamon-covid-tracker-api/delete.php?id=' + this.props.obj.user_id).then(
            console.log('Deleted'),
            this.setState({
                redirect: true
            })
        ).catch(
            err => console.log(err)
        )
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/view' />;
        }

        return (
            <tr>
                <td>
                    { this.props.obj.id }
                </td>
                <td>
                    { this.props.obj.first_name }
                </td>
                <td>
                    { this.props.obj.last_name }
                </td>
                <td>
                    { this.props.obj.alias }
                </td>
                <td>
                    <Link to={ "/edit/" + this.props.obj.id } className="btn btn-primary mr-3">Edit</Link>
                    <button onClick={ this.delete } className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default RecordsListPui;
