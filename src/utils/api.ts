import axios, {AxiosInstance, AxiosResponse} from 'axios';
import qs from 'qs'
import {showMessage} from "./status.ts";


//返回 res.data 的interface
export interface IResponse {
    code: number | string;
    data: never;
    msg: string;
}


//返回的实例
export const axiosInstance: AxiosInstance = axios.create({
    timeout: 8000,
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
    },
    transformRequest: [
        //请求
        function (data) {
            delete data.Authorization
            data = qs.stringify(data);
            return data;
        }
    ]
});

// axios实例拦截响应
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.headers.authorization) {
            localStorage.setItem('app_token', response.headers.authorization);
        }
        if (response.data && response.data.token) {
            localStorage.setItem('app_token', response.data.token);
        }
        if (response.status === 200) {
            return response;
        } else {
            showMessage(response.status);
            return response
        }
    },
    (error: any) => {
        const {response} = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            showMessage(response.status);
            return Promise.reject(response.data);
        } else {
            console.log('网络连接异常,请稍后再试!');
        }

    }
)

// axios实例拦截请求
// axios实例拦截请求
axiosInstance.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem('app_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
)