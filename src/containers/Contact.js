import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <div className="contact-info">
                    <h2 className="contact-title-wrapper"><span className="contact-title">Contact Us</span></h2>
                </div>

                <div className="container py-4">
                    <p className="justify-content">If you ever have any concern about the <strong>Persons Under Monitoring (PUM)</strong>, <strong>Persons Under Investigation (PUI)</strong> and positive cases of <strong>COVID-19</strong> (<em>if any</em>) currently in the Municipality. Please do not hesitate to contact us with the following numbers that are provided below.</p> 

                    <p className="justify-content">The information from this website is directly coming from the authorized personnel of the Local Government Unit (LGU) of Linamon. The information presented may not be up-to-date from time to time because it is not automatically getting data, the data is manually inputted by an authorized user from the LGU Linamon.</p>

                    <div className="linamon-logo-wrapper mt-5">
                        <div className="linamon-logo">
                            <img src="/linamon-logo.png" alt="Municipality of Linamon" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}