import {http} from "../../utils/http.tsx";
import {IResponse} from '../../utils/http.tsx'

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const userLogin = (): Promise<IResponse> => {
    return http.post('rp/lib/repair/libMiniLists').then(res => {
        console.log(res)
        if (res && res.data) {
            return res.data;
        } else {
            throw new Error('Invalid response');
        }
    });
};
