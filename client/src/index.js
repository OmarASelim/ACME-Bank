import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'



import './index.css';
import Dashboard from './comps/Dashboard'
import Transactions from './comps/Transactions'
import Login from './comps/Login' 
import Profile from './comps/Profile'
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/home" component={Dashboard}/>
                    <Route exact path="/transactions" component={Transactions}/>
                    <Route exact path="/profile" component={Profile}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>, document.getElementById('root'))
registerServiceWorker();
