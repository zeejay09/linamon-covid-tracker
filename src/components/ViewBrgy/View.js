import React, { Component } from 'react';
import axios from 'axios';
import './View.css';
import RecordsList from './RecordsList';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default class View extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            pui: [],
            pum: [],
            covid: [],
            brgy: [],
            isLoggedIn: sessionStorage.getItem('isLoggedIn') ? sessionStorage.getItem('isLoggedIn') : false,
        };
    }

    componentDidMount = () => {
        axios.get('/puis/barangays/' + this.props.match.params.id).then(
            response => {
                console.log(response.data.data);
                this.setState({ pui: response.data.data });
            }
        ).catch( function (error) {
            console.log(error);
        })

        axios.get('/pums/barangays/' + this.props.match.params.id).then(
            response => {
                console.log(response.data.data);
                this.setState({ pum: response.data.data });
            }
        ).catch( function (error) {
            console.log(error);
        })

        axios.get('/covid-cases/barangays/' + this.props.match.params.id).then(
            response => {
                console.log(response.data.data);
                this.setState({ covid: response.data.data });
            }
        ).catch( function (error) {
            console.log(error);
        })

        const authToken = sessionStorage.getItem('authToken');

        axios.get('/barangays/' + this.props.match.params.id, {headers:{Authorization: authToken}}).then(
            response => {
                console.log(response.data.data);
                this.setState({ brgy: response.data.data });
            }
        ).catch( function (error) {
            console.log(error);
        })
    }

    puiList = () => {
        return this.state.pui.map(function (object, i) {
            return <RecordsList obj={object} key={i} />;
        })
    }

    pumList = () => {
        return this.state.pum.map(function (object, i) {
            return <RecordsList obj={object} key={i} />;
        })
    }

    covidList = () => {
        return this.state.covid.map(function (object, i) {
            return <RecordsList obj={object} key={i} />;
        })
    }

    render() {

        //Store to localStorage
        localStorage.setItem('brgy_id', this.state.brgy['id'])

        if (!this.state.isLoggedIn) {
            return <Redirect to={{ pathname: "/" }} />;
        }
        
        return (
            <div className="view-brgy">
                <div className="covid-table">
                    <h3 align="center">Barangay { this.state.brgy['brgy_name'] }</h3>
                    <div id="title-wrapper" className="mt-5">
                        <h4 align="center">Confirmed COVID-19 Cases (COVID-19)</h4>
                        <Link to={ "/add/covid-case" } className="btn btn-primary">Add COVID Case</Link>
                    </div>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Alias</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.covidList() }
                        </tbody>
                    </table>
                </div>

                <div className="pui-table">
                    <div id="title-wrapper" className="mt-5">
                        <h4 align="center">Persons Under Investigation (PUI)</h4>
                        <Link to={ "/add/pui" } className="btn btn-primary">Add PUI</Link>
                    </div>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Alias</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.puiList() }
                        </tbody>
                    </table>
                </div>

                <div className="pum-table">
                    <div id="title-wrapper" className="mt-5">
                        <h4 align="center">Persons Under Monitoring (PUM)</h4>
                        <Link to={ "/" } className="btn btn-primary">Add PUM</Link>
                    </div>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Alias</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.pumList() }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}