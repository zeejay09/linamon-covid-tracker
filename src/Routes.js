import React from "react";
import { Route, Switch } from "react-router-dom";

// My imports
import Insert from './components/Insert';
import Edit from './components/Edit';
import View from './components/View';
import Home from './containers/Home';
import About from './containers/About';

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={ Home } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/insert' component={ Insert } />
        <Route path='/edit/:id' component={ Edit } />
        <Route path='/view' component={ View } />
    </Switch>
  );
}