import React, { Component } from 'react';
import Cards from "../components/Home/Cards";
import './Home.css';

class Home extends Component {
    
    render() {
        return (
            <div className="infobar">
                <div className="infobar-info">
                    <h1 className="infobar-title-wrapper"><span className="infobar-title">Linamon COVID-19 Tracker</span></h1>
                </div>

                <Cards />

                <div className="linamon-logo-wrapper mt-5">
                    <div className="linamon-logo">
                        <img src="/linamon-logo.png" alt="Municipality of Linamon" />
                    </div>
                </div>

            </div>
        );
    }
}

export default Home