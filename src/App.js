import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Insert from './components/Insert';
import Edit from './components/Edit';
import View from './components/View';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">Linamon COVID-19 Tracker</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/insert'} className="nav-link">Insert</Link>
              </li>
              <li className="nav-item">
                <Link to={'/view'} className="nav-link">View</Link>
              </li>
            </ul>
          </div>
        </nav>

        <h2>Welcome to COVID-19 Tracker</h2>

        <Switch>
          <Route exact path='/insert' component={ Insert } />
          <Route path='/edit/:id' component={ Edit } />
          <Route path='/view' component={ View } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
