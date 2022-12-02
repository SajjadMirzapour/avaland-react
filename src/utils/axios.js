import Axios from "axios";

const BASE_URL = 'http://localhost:5000';

const axios = Axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = token
    }
    return config;
})

axios.interceptors.response.use(response => {
    if (response.status >= 400 && response.status <= 500) {
        // Do something
    }
    return response;
}, error => {
    return Promise.reject(error);
})

export default axios;