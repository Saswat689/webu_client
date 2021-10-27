import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TopBar from './components/topbar/TopBar.js';
//pages
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
// import { useContext } from "react";
// import { Context } from "./context/Context"

function App() {

	// const {user} = useContext(Context);

  return (
  	<Router>
    <TopBar />
    	<Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/write">
            <Write />
          </Route>
          <Route exact path="/post/:pageId/:pageTitle/">
            <Single />
          </Route>
      </ Switch>    
    </ Router>
  );
}

export default App;
