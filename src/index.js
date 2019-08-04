import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(
  request => {
    console.log('axios interceptors request', request);
    return request;
  },
  error => {
    console.log('error', error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log('axios interceptors response', response);
    return response;
  },
  error => {
    console.log('error', error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
