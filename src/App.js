import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

// My imports
import './App.css';
import NavigationBar from './components/Navbar/NavigationBar';
import Routes from "./Routes";

function App() {

  return (
    <Router>
      <NavigationBar />

      <Routes />
    </Router>
    )
}

export default App;
