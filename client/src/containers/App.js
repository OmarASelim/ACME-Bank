import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Dashboard from '../comps/Dashboard';
import Login from '../comps/Login';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={()=>(
         <Link to='/login'>Login</Link>
        )}
        />


        
        <Route exact path='/login' component={Login}/>
        <Link to='/dashboard'>Dashboard</Link>
        <Route exact path='/dashboard' component={Dashboard}/>
        
      </div>
    );
  }
}

export default App;
