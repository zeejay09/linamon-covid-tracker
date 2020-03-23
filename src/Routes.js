import React from "react";
import { Route, Switch } from "react-router-dom";

// My imports
import Insert from './components/Insert';
import Edit from './components/Edit';
import View from './components/View';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import LoginForm from './components/Login/LoginForm';
import ViewBrgy from "./components/ViewBrgy/View";
import AddCovid from "./components/Add/Covid";
import AddPui from "./components/Add/Pui";
import AddPum from "./components/Add/Pum";
import AddUser from "./components/Add/User";

export default function Routes() {
  return (
    <Switch>
        <Route path='/' exact component={ Home } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/contact' component={ Contact } />
        <Route exact path='/user' component={ LoginForm } />
        <Route exact path='/insert' component={ Insert } />
        <Route exact path='/edit/:id' component={ Edit } />
        <Route exact path='/view' component={ View } />
        <Route exact path='/view/brgy/:id' component={ ViewBrgy } />
        <Route exact path='/add/covid-case' component={ AddCovid } />
        <Route exact path='/add/pui' component={ AddPui } />
        <Route exact path='/add/pui' component={ AddPum } />
        <Route exact path='/add/user' component={ AddUser } />
    </Switch>
  );
}