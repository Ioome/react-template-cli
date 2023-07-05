import './style.scss';

const Login = () => {
    return (
        <>
            <div className="login-container">
                <div className="react-logo">
                    {/*   写一个加载 svg*/}
                    <img src="public/Frame.svg" alt="" className="w-32  h-28" />
                </div>
                <div className="react-welcome-message react-welcome-typography  flex w-80 h-32 flex-col shrink-0">
                    <div>LOG IN</div>
                    <div>My HOME🏡</div>
                </div>
                <div className="react-register-message react-register-typography flex w-80 h-28 flex-col shrink-0">
                    <div>If you don’t have an account register</div>
                    <div>
                        You can <a href="">Register here !</a>
                    </div>
                </div>
                <div className="react-contribution-message react-register-typography flex w-24 h-5 flex-col shrink-0">
                    <div className="contribution">Contribution</div>
                    <div className="contribution-numher"></div>
                </div>
            </div>
        </>
    );
};

export default Login;
