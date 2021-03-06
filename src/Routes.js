import React from "react";
import { Route, Switch } from "react-router-dom";

// My imports
import EditUser from './components/Update/User';
import View from './components/ViewUsers/View';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import LoginForm from './components/Login/LoginForm';
import ViewBrgy from "./components/ViewBrgy/View";
import AddCovid from "./components/Add/Covid";
import AddPui from "./components/Add/Pui";
import AddPum from "./components/Add/Pum";
import AddUser from "./components/Add/User";
import EditCovid from "./components/Update/Covid";
import EditPui from "./components/Update/Pui";
import EditPum from "./components/Update/Pum";

export default function Routes() {
  return (
    <Switch>
        <Route path='/' exact component={ Home } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/contact' component={ Contact } />
        <Route exact path='/user' component={ LoginForm } />
        <Route exact path='/edit/user/:id' component={ EditUser } />
        <Route exact path='/view/users' component={ View } />
        <Route exact path='/view/brgy/:id' component={ ViewBrgy } />
        <Route exact path='/add/covid-case' component={ AddCovid } />
        <Route exact path='/add/pui' component={ AddPui } />
        <Route exact path='/add/pum' component={ AddPum } />
        <Route exact path='/add/user' component={ AddUser } />
        <Route exact path='/edit/covid-case/:id' component={ EditCovid } />
        <Route exact path='/edit/pui/:id' component={ EditPui } />
        <Route exact path='/edit/pum/:id' component={ EditPum } />
    </Switch>
  );
}