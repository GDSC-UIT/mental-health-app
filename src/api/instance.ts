import {BASE_URL} from '@src/assets/const';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setToken = (token: string) => {
    // @ts-ignore
    axiosInstance.defaults.headers['x-firebase-uid'] = token;
};

export default axiosInstance;
