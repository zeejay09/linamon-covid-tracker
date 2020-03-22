import React, { Component } from 'react';
import './Home.css';
import Cards from "../components/Home/Cards";

class InfoBar extends Component {
    
    render() {
        return (
            <div className="infobar">
                <div className="infobar-info">
                    <h2 className="infobar-title-wrapper"><span className="infobar-title">Linamon COVID-19 Tracker</span></h2>
            </div>

                <Cards />
                
            </div>
        );
    }
}

export default InfoBar