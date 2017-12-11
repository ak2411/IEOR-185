import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import App from './App';
import YourNetwork from './YourNetwork';
import Newsfeed from './Newsfeed';
import About from './About';
import {Route, BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/feed' component={Newsfeed} />
      <Route exact path='/network' component={YourNetwork} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
