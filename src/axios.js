// import React from 'react';
import axios from 'axios';

// create instance of axios
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
