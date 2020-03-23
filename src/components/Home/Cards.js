import React, { Component } from 'react';
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck';
import './Cards.css';
import InfoCard from './InfoCard';

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = { brgy: [] };
    }

    componentDidMount() {
        axios.get('/barangays').then(response => {
            this.setState({ brgy: response.data.data });
            // console.log(response.data.data);
        }).catch(function (error) {
            console.log(error);
        })
    }

    infoCardList = () => {
        return this.state.brgy.map(function (object, i) {
            return <InfoCard obj={object} key={i} />;
        })
    }
    
    render() {
        return (
            <CardDeck>
                { this.infoCardList() }
            </CardDeck>
        );
    }
}

export default Cards