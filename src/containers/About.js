import React, { Component } from 'react';
import './About.css';

export default class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="about-info">
                    <h2 className="about-title-wrapper"><span className="about-title">About this Project</span></h2>
                </div>


                <div className="container py-4">
                    <p className="justify-content">This simple website is dedicated to deliver the latest information to the residents of the Municipality of Linamon about the total number of <strong>Persons Under Monitoring (PUM)</strong>, <strong>Persons Under Investigation (PUI)</strong> and positive cases of <strong>COVID-19</strong> (<em>if any</em>) currently in the Municipality.</p> 

                    <p className="justify-content">The information from this website is directly coming from the authorized personnel of the Local Government Unit (LGU) of Linamon. The information presented may not be up-to-date from time to time because it is not automatically getting data, the data is manually inputted by an authorized user from the LGU Linamon.</p>

                    <div className="linamon-logo-wrapper">
                        <logo className="linamon-logo">
                            <img src="/linamon-logo.png" alt="Municipality of Linamon" />
                        </logo>
                    </div>
                </div>
            </div>
        )
    }
}