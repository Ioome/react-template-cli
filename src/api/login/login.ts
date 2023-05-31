import {http} from "../../utils/http.ts";
import {IResponse} from '../../utils/http.ts'
import {ILogin} from "../../interface/login.ts";

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const Login = (params: ILogin): Promise<IResponse> => {
    return http.post('user/login', params).then(res => res.data);
};
