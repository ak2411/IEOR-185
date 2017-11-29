import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import YourNetwork from './YourNetwork';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<YourNetwork />, document.getElementById('root'));
registerServiceWorker();
