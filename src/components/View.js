import React, { Component } from 'react';
import axios from 'axios';

import RecordsList from './RecordsList';

export default class View extends Component {
    
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://localhost/linamon-covid-tracker-api/view.php').then(response => {
            this.setState({ users: response.data });
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
            <div>
                <h3 align="center">Users List</h3>
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