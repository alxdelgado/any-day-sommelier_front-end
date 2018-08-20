import React, { Component } from 'react';
import HomeContainer from './HomeContainer/HomeContainer.js';
import Header from './HeaderContainer/index.js'
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Register from './Register'

const My404 = () => {
  return (
    <div>
        <h1>404</h1>
        <h3>Sorry, the page connot be found</h3>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Link to='/user/register'>Register</Link><br/>
          <Link to='/user/login'>Login</Link><br/>
          <Switch>
            <Route exact path='/' component= {HomeContainer}/>
            <Route exact path='/Register' component={Register}/>
            <Route component={My404}/>

          </Switch>
      </div>
    );
  }
}

export default App;
