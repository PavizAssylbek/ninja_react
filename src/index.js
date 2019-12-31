import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

