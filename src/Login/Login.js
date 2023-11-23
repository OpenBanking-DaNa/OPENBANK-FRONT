import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginCss from "./Login.module.css"
import { callLoginAPI, callLogoutAPI } from "../APIS/AuthAPICalls";
import { Navigate } from "react-router-dom";

function Login() {

    const loginMember = useSelector(state => state.auth);

    const [form, setForm] = useState({
        memberId: '',
        memberPassword: '',
    })

    console.log("form", form);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const dispatch = useDispatch();

    const LoginSubmit = () => {
        dispatch(callLoginAPI(form));
    };

    const LogoutSubmit = () => {
        dispatch(callLogoutAPI(form));
    };


    useEffect(() => {
        if (loginMember.state === 200 && loginMember.isLogin) {
            Navigate("/", { replace: true });
        }
    }, [loginMember]);


    return (

        <div className={LoginCss.logindiv}>
            {loginMember.isLogin ?
                (
                    <div className={LoginCss.loggedInUserInfo}>
                        {loginMember.memberId} 님
                        <button className={LoginCss.submit} onClick={LogoutSubmit}>로그아웃</button>
                    </div>

                ) : (
                    <div>
                        <div className={LoginCss.input}>
                            <input
                                type="text" name="memberId" value={form.memberId} placeholder="아이디입력"
                                onChange={handleChange}
                            >
                            </input>
                            <input
                                type="password" name="memberPassword" value={form.memberPassword} placeholder="비밀번호입력"
                                onChange={handleChange}
                            >
                            </input>
                            <button className={LoginCss.submit} onClick={LoginSubmit}>로그인</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Login;