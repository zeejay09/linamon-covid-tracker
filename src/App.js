import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

// My imports
import './App.css';
import NavigationBar from './components/Navbar/NavigationBar';
import Routes from "./Routes";

function App() {

  const isLoggedIn = sessionStorage.getItem('isLoggedIn') ? sessionStorage.getItem('isLoggedIn') : false;

  
    return (
      <Router>
        <NavigationBar {...{isLoggedIn}} />

        <Routes />
      </Router>
      )
    // } else {
    //   return (
    //     <Router>
    //       <header>
    //         <div className="container-fluid">
    //             <Navbar bg="light" expand="lg">
    //                 <Link to={'/'} className="navbar-brand">Municipality of Linamon</Link>
    //                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //                 <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    //                     <ul className="navbar-nav">
    //                         <li className="nav-item">
    //                             <Link to={'/about'} className="nav-link">About</Link>
    //                         </li>
    //                         <li className="nav-item">
    //                             <Link to={'/contact'} className="nav-link">Contact</Link>
    //                         </li>
    //                     </ul>
    //                 </Navbar.Collapse>
    //             </Navbar>
    
    //             <Routes />
                
    //         </div>
    //       </header>
    //     </Router>
    //   )
    // }
}

export default App;
