import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

// My imports
import Routes from "./Routes";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container-fluid">

        <Navbar bg="light" expand="lg">
          <Link to={'/'} className="navbar-brand">Municipality of Linamon</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/about'} className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to={'/insert'} className="nav-link">Contact</Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
        
        <Routes />

      </div>
    </Router>
  );
}

export default App;
