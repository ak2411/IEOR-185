import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import App from './App';
import SignUp from './SignUp';
import Home from './Home';
import About from './About';
import {Route, BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={SignUp} />
      <Route exact path='/about' component={About} />
      <Route exact path='/home' component={Home} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
