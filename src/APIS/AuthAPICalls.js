import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAction, logoutAction } from "../Modules/AuthSlice";
import { ReduxReset } from "../Utils/ReduxReset";

// 로그인 API
export const callLoginAPI = (form) => {

    console.log("callLoginAPI - data", form);

    const requestURL = `${process.env.REACT_APP_BASIC_URL}/api/member/login`;

    return async (dispatch, getState) => {

        const response = await fetch(requestURL, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                memberId: form.memberId,
                memberPassword: form.memberPassword,
            })
        })
            .then(res => res.json());

        try {
            if (response.status === 200) {
                dispatch(loginAction(response))
                console.log("callLoginAPI - result.data : ", response.data);
                window.sessionStorage.setItem('accessToken', response.data.accessToken);
            } else {
                console.log("callLoginAPI - result.data : ", response);
                alert(response.message);
            }

        } catch (e) {
            console.error("로그인 문제 발생", e.message);
        }

    }

}

// 로그아웃 API
export const callLogoutAPI = () => {

    return async (dispatch, getState) => {

        try {

            await dispatch(logoutAction());
            console.log("callLogoutAPI : logout 완료");
        } catch (error) {
            console.log(error);
        } finally {
            // 로그아웃시 로컬에 있는 리덕스, 토큰 등 초기화하기 
            localStorage.setItem('reduxState', '');
            ReduxReset('authes');
            localStorage.removeItem('accessToken');
            document.cookie = 'RefreshToken' || '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=C.kr;path=/;';
        }
    }

}
