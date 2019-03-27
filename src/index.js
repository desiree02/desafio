import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import View from './View';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<View />, document.getElementById('root'));
serviceWorker.unregister();