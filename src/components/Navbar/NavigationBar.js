import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavLink } from 'react-bootstrap';
import axios from 'axios';

// My imports
import './NavigationBar.css';

function NavigationBar(props) {

    const onSubmit = (e) => {
        e.preventDefault();
    
        const authToken = sessionStorage.getItem('authToken');
        
        axios.post('http://la-covid-api.jeexpoy.com/v1/logout', null, {headers:{Authorization: authToken}}).then(
            res => {
                sessionStorage.clear();
                window.location.reload();
            }
        );
    }

    return (
        <header>
            <div className="container-fluid">
                <Navbar bg="light" expand="lg">
                    <NavLink href={'/'} className="navbar-brand">Municipality of Linamon</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <ul className="navbar-nav">
                            {props.isLoggedIn ?
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink href='/about' className="nav-link">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink href='/contact' className="nav-link">Contact</NavLink>
                                </li>
                                <form onSubmit={ onSubmit }>
                                    <li className="nav-item">
                                    <button type="submit" className="nav-link bg-transparent">Logout</button>
                                    </li>
                                </form>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink href='/about' className="nav-link">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink href='/contact' className="nav-link">Contact</NavLink>
                                </li>
                            </React.Fragment>
                            }
                        </ul>
                    </Navbar.Collapse>
                </Navbar>
                
            </div>
        </header>
    )
}

export default NavigationBar;
