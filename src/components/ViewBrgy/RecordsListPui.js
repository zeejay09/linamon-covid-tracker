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

        const authToken = sessionStorage.getItem('authToken');

        let data = {
            pui_id: [
                this.props.obj.id
            ]
        }

        axios.delete('/delete/puis', {data,headers:{Authorization: authToken}}).then(
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
            return <Redirect to={{ pathname: "/view/brgy/" + localStorage.getItem('brgy_id') }} />;
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
                    <Link to={ "/edit/pui/" + this.props.obj.id } className="btn btn-primary mr-3">Edit</Link>
                    <button onClick={ this.delete } className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default RecordsListPui;
