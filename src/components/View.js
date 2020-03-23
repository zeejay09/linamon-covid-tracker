import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import RecordsList from './RecordsList';

export default class View extends Component {
    
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        const authToken = sessionStorage.getItem('authToken');
        axios.get('/users', {headers:{Authorization: authToken}}).then(response => {
            this.setState({ users: response.data.data });
        }).catch(function (error) {
            console.log(error);
        })
    }

    usersList = () => {
        return this.state.users.map(function (object, i) {
            return <RecordsList obj={object} key={i} />;
        })
    }

    render() {
        return (
            <div className="mt-3 p-3">
                <h3 align="center">Users List</h3>
                <Link to={ "/add/covid-case" } className="btn btn-primary">Add User</Link>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.usersList() }
                    </tbody>
                </table>
            </div>
        );
    }
}