
import {userLogin} from '../../api/login/login';
import {IResponse} from '../../utils/http.tsx'
import styled from "styled-components";
import {Button} from "@mui/material";

const Title = styled.h1`
        color: red;
`;
const Login = () => {
    const handleLogin = async () => {
        // 调用登录Api，获取结果
        const res: IResponse = await userLogin();
        console.log(res)
    }
    return (
        <>
            <Title>测试登录</Title>
            <Button
                onClick={() => handleLogin()}
            >登陆
            </Button>
        </>
    )
}


export default Login