import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                        <Card.Header className="text-center">
                            <h2>{ this.props.obj.brgy_name }</h2>
                            <Link to={ "/view/brgy/" + this.props.obj.id } className="btn btn-primary">View</Link>
                        </Card.Header>
                    </>
                :
                    <>
                        <Card.Header className="text-center"><h2>{ this.props.obj.brgy_name }</h2></Card.Header>
                    </>
                }
                <Card.Body align="center">
                    <Card.Text>
                        <h3>PUI: { this.state.pui }</h3>
                        <h3>PUM: { this.state.pum }</h3>
                        <h3>COVID: { this.state.covid }</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default InfoCard;
