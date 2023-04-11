import axios from 'axios';

const TOKEN = process.env.REACT_APP_TOKEN;

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${TOKEN}`,
    },
});

export default api;
