import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// request => Object
// use() => register new interceptor
// => use() interceptor takes a function as an input which recieves the config/request
var myInterceptor = axios.interceptors.request.use(request => {
  console.log('[index.js] axios interceptors request', request);

  // We can edit request config e.g. headers
  return request;
}, error => {
  console.log('[index.js] axios interceptors request error', error);
  // we return Promise reject error to forward it  to our request where we wrote in our component, where we can handle it withour catch method.
  return Promise.reject(error);
});

axios.interceptors.request.eject(myInterceptor);

axios.interceptors.response.use(response => {
  console.log('[index.js] axios interceptors response', response);

  // We can edit response config e.g. headers
  return response;
}, error => {
  console.log('[index.js] axios interceptors response error', error);
  // we return Promise reject error to forward it  to our response where we wrote in our component, where we can handle it withour catch method.
  return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
