import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://recipies-back.onrender.com/',
     headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(function (config) {
    console.log(config)
    return config;
}, function (error) {
    console.log(error)
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    console.log(response)
    return response;
}, function (error) {
    console.log(error)
    return Promise.reject(error);
});
  
export default instance