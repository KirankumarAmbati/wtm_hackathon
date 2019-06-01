import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Route, Switch} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import EmergencyContact from './components/EmergencyContact';
import HelpScreen from './components/HelpScreen';
import Register from './components/Register';
import Login from './components/Login';
import Nav from './components/Nav';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route exact path='/' component={App} ></Route> */}
          <Route path='/emergency' component={EmergencyContact} ></Route>
          <Route path='/help' component={HelpScreen} ></Route>
          <Route path='/login' component={Login} ></Route>
          <Route path='/register' component={Register} ></Route>
          <Route path='/profile' component={Profile} ></Route>
          <Route></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
