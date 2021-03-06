import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavLink } from 'react-bootstrap';
import axios from 'axios';

// My imports
import './NavigationBar.css';

class NavigationBar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            isLoggedIn: sessionStorage.getItem('isLoggedIn') ? sessionStorage.getItem('isLoggedIn') : false,
            userRole: sessionStorage.getItem('userRole') ? parseInt(sessionStorage.getItem('userRole')) : false,
        };
    }

    handleLogout = (e) => {
        e.preventDefault();
    
        const authToken = sessionStorage.getItem('authToken');
        
        axios.post('/logout', null, {headers:{Authorization: authToken}}).then(
            res => {
                sessionStorage.clear();
                window.location.reload();
            }
        );
    }

    render() {
        return (
            <header>
                <div className="container-fluid">
                    <Navbar bg="light" expand="lg">
                        <NavLink href={'/'} className="navbar-brand lgu-linamon-logo-wrapper"><img src="/linamon-logo.png" alt="Municipality of Linamon" className="lgu-linamon-logo"/></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <ul className="navbar-nav">
                                {this.state.isLoggedIn ?
                                <React.Fragment>
                                    {this.state.userRole === 1 ?
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <NavLink href='/view/users' className="nav-link">Users</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink href='/about' className="nav-link">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink href='/contact' className="nav-link">Contact</NavLink>
                                        </li>
                                        <form onSubmit={ this.handleLogout }>
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
                                        <form onSubmit={ this.handleLogout }>
                                            <li className="nav-item">
                                                <button type="submit" className="nav-link bg-transparent">Logout</button>
                                            </li>
                                        </form>
                                    </React.Fragment>
                                    }
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
}

export default NavigationBar;
