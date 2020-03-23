import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';

class InfoCard extends Component {

    componentDidMount() {
        axios.get('http://la-covid-api.jeexpoy.com/v1/puis/barangays/' + this.props.obj.id).then(response => {
            this.setState({ brgy: response.data.data });
            console.log(response.data.data);
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {

        return (
            <Card>
                <Card.Header className="text-center">{ this.props.obj.brgy_name }</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <span className="float-left">PUI: 0</span><span className="float-right">PUM: 0</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default InfoCard;
