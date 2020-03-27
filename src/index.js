import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from "./containers/Footer";
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

//Live Server 1 on 1
axios.defaults.baseURL = '//la-covid-api.jeexpoy.com/v1';

// Live Server Heroku
// axios.defaults.baseURL = 'https://la-covid-api.herokuapp.com/';

// Dev Server
// axios.defaults.baseURL = 'http://api.covidtracker.com/v1';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
