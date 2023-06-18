import { http } from '@utils/system-http/http.tsx';

export function httpJson(type, url, data, config) {
    return http[type](url, data, {
        headers: {
            'Content-Type': 'application/json'
        },
        ...config
    });
}
// json 形式发送
export function post(url, data = {}, config = {}) {
    return httpJson('post', url, data, config);
}

export function put(url, data = {}, config = {}) {
    return httpJson('put', url, data, config);
}
