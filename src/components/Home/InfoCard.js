import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './InfoCard.css';

class InfoCard extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            pui: 0,
            pum: 0,
            covid: 0,
            isLoggedIn: sessionStorage.getItem('isLoggedIn') ? sessionStorage.getItem('isLoggedIn') : false,
        };
    }

    componentDidMount() {
        axios.get('/puis/barangays/' + this.props.obj.id).then(response => {
            this.setState({ 
                pui: response.data.data.length 
            });
            console.log("pui: " + response.data.data.length);
        }).catch(function (error) {
            console.log(error);
        })

        axios.get('/pums/barangays/' + this.props.obj.id).then(
            response => {
                this.setState({ 
                    pum: response.data.data.length 
                });
                console.log("pum: " + response.data.data.length);
            }
        ).catch( function (error) {
            console.log(error);
        })

        axios.get('/covid-cases/barangays/' + this.props.obj.id).then(
            response => {
                this.setState({ 
                    covid: response.data.data.length 
                });
                console.log("covid: " + response.data.data.length);
            }
        ).catch( function (error) {
            console.log(error);
        })
    }

    render() {

        return (
            <Card>
                {this.state.isLoggedIn ?
                    <>
                        <Card.Header>
                            <span className="barangay-name-header">{ this.props.obj.brgy_name }</span>
                            <Link to={ "/view/brgy/" + this.props.obj.id } className="btn btn-primary">View</Link>
                        </Card.Header>
                    </>
                :
                    <>
                        <Card.Header><span className="barangay-name-header">{ this.props.obj.brgy_name }</span></Card.Header>
                    </>
                }
                <Card.Body>
                    <div className="card-text">
                        <span className="barangay-name-header">Cases: { this.state.covid }</span>
                        <h6>PUI: { this.state.pui }</h6>
                        <h6>PUM: { this.state.pum }</h6>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default InfoCard;
