import {axiosInstance} from "../../utils/api;
import {IResponse} from '../../utils/api.ts'
import {ILogin} from "../../interface/login.ts";

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const Login = (params: ILogin): Promise<IResponse> => {
    return axiosInstance.post('user/login', params).then(res => res.data);
};
