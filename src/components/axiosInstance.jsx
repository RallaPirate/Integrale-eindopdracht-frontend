import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5173/api', // or whatever your base is
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // or however you're storing it
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;