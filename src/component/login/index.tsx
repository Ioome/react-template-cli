import {ILogin} from '../../interface/login.ts'
import {userLogin} from '../../api/login/login';
import {IResponse} from '../../utils/http.ts'

const Login = () => {
    const handleLogin = async (login: ILogin) => {
        // 调用登录Api，获取结果
        const res: IResponse = await userLogin(login);
        console.log(res)
    }
    return (
        <>
            <button
                onClick={() => handleLogin({username: 'admin', password: '123456'})}
            >登陆
            </button>
        </>
    )
}


export default Login