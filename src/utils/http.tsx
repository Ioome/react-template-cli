import axios, { AxiosInstance, AxiosResponse } from 'axios';
import qs from 'qs';
import { showMessage } from './status.tsx';

//导出
export const baseURL = import.meta.env.VITE_BASE_URL;

export const http: AxiosInstance = axios.create({
    timeout: 8000,
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    // 用于在发送请求之前对请求数据进行处理或转换
    transformRequest: [
        function (data) {
            //删除 权限
            delete data.Authorization;
            //数据转换
            data = qs.stringify(data);
            //返回数据
            return data;
        }
    ]
});

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

http.interceptors.response.use(
    (config: AxiosResponse): AxiosResponse => {
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
    (error: any): Promise<never> => {
        const { config } = error;
        if (config) {
            // 请求已发出，但是不在2xx的范围
            showMessage(config.status);
            return Promise.reject(config.data);
        } else {
            console.log('网络连接异常,请稍后再试');
            return Promise.reject(error);
        }
    }
);
