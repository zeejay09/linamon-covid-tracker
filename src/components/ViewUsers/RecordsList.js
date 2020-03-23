import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class RecordsList extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }

    delete = () => {

        const authToken = sessionStorage.getItem('authToken');

        let data = {
            user_id: [
                this.props.obj.id
            ]
        }

        console.log(data);
        axios.delete('/delete/users', {data,headers:{Authorization: authToken}}).then(
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
            return <Redirect to='/view/users' />;
        }

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
                    <Link to={ "/edit/user/" + this.props.obj.id } className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={ this.delete } className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default RecordsList;
