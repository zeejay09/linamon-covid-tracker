import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Cards from "../components/Home/Cards";
import './Home.css';

class Home extends Component {
    
    render() {
        return (
            <div className="infobar">

                <div className="infobar-info">
                    <h1 className="infobar-title-wrapper"><span className="infobar-title">Linamon COVID-19 Tracker</span></h1>
                </div>

                <div className="pb-2 pt-5 pl-5 pr-5 tracker-important-notice" >
                    <Alert variant="success">
                        <Alert.Heading>Important Notice</Alert.Heading>
                        <hr />
                        <p className="mb-0">
                            The data that is being presented here is manually inputted to the database by the authorized personnel. Therefore, the updating of data might be delayed but still be updated.
                        </p>
                    </Alert>
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