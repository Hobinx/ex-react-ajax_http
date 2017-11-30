import axios from 'axios';

const instance = axios.create({
  baseURL: 'https:///jsonplaceholder.typicode.com'
});

// overwrite global defaults
// instance.defaults.headers.common['Authorization'] = ''

export default instance;