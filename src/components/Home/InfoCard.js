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
            isLoggedIn: sessionStorage.getItem('isLoggedIn') ? sessionStorage.getItem('isLoggedIn') : false,
        };
    }

    componentDidMount() {
        axios.get('/puis/barangays/' + this.props.obj.id).then(response => {
            this.setState({ brgy: response.data.data });
            console.log(response.data.data);
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {

        return (
            <Card>
                {this.state.isLoggedIn ?
                    <>
                        <Card.Header className="text-center">
                            { this.props.obj.brgy_name }
                            <Link to={ "/view/brgy/" + this.props.obj.id } className="btn btn-primary float-right">View</Link>
                        </Card.Header>
                    </>
                :
                    <>
                        <Card.Header className="text-center">{ this.props.obj.brgy_name }</Card.Header>
                    </>
                }
                <Card.Body>
                    <Card.Text>
                        <span className="float-left">PUI: { this.state.pui }</span><span className="float-right">PUM: { this.state.pum }</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default InfoCard;
