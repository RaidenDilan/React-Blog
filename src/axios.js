// import React from 'react';
import axios from 'axios';

// create instance of axios
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
// instance.defaults.headers.post['Content-Type'] = 'application/json';

// instance.interceptors.request...

export default instance;
