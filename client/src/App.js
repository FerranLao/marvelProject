import React from 'react';
import './App.css';
import { NavBar, Search } from './components';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import { appStyles } from "./styles"

function App({ classes }) {
  return (
    <Router>
      <NavBar />
      <div className={classes.App}>
        <Switch>
          <Route exact path="/characters">
            <Search type="characters"></Search>
          </Route>
          <Route exact path="/comics">
            <Search type="comics"></Search>
          </Route>
          <Route exact path="/creators">
            <Search type="creators"></Search>
          </Route>
        </Switch>
        <a className={classes.footer} href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>
      </div>
    </Router>
  );
}

export default withStyles(appStyles)(App);
