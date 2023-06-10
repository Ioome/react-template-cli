import axios, { AxiosInstance, AxiosResponse } from 'axios';
import qs from 'qs';
import { showMessage } from './status.tsx';

export const http: AxiosInstance = axios.create({
    timeout: 8000,
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [
        function (data) {
            delete data.Authorization;
            data = qs.stringify(data);
            return data;
        }
    ]
});

// axios实例拦截响应
http.interceptors.response.use(
    (config: AxiosResponse) => {
        if (config.headers.authorization) {
            localStorage.setItem('app_token', config.headers.authorization);
        }
        if (config.data && config.data.token) {
            localStorage.setItem('app_token', config.data.token);
        }
        if (config.status === 200) {
            return config;
        } else {
            showMessage(config.status);
            return config;
        }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (error: any) => {
        const { config } = error;
        if (config) {
            // 请求已发出，但是不在2xx的范围
            showMessage(config.status);
            return Promise.reject(config.data);
        } else {
            console.log('网络连接异常,请稍后再试');
        }
    }
);

// axios实例拦截请求
// axios实例拦截请求
http.interceptors.request.use(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (config: any) => {
        const token = localStorage.getItem('app_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (error: any) => {
        return Promise.reject(error);
    }
);
