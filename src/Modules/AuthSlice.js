import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = {
    memberId: '',
    memberPassword: '',
    isLogin: false,

}

const authSlice = createSlice({
    name: 'auth', // 리듀서 이름
    initialState,
    reducers: {
        loginAction: (state, {payload}) => {
            // actions안에 payload, type 원하는 곳에 넘겨주는 역할 
            // state : 초기값의 value를 가져오는 역할 

            state.memberId = payload.data.memberId;
            state.memberCode = payload.data.memberCode;
            state.accessExp = payload.data.accessTokenExpiresIn;
            state.refreshExp = payload.data.refreshTokenExpiresIn;
            state.isLogin = true;
            state.isTempPwd = payload.data.isTempPwd;
            state.clientId = payload.data.clientId;
        },

        logoutAction: (state, {payload}) => {
            Object.assign(state, initialState); // state를 initialState로 변경
            localStorage.setItem('reduxState', '');
            localStorage.removeItem('accessToken');
            document.cookie = 'RefreshToken=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=localhost; path=/;';
            window.location.href="/";

        }
    }

});

// 액션 생성자 내보내기
export const { loginAction, logoutAction } = authSlice.actions;

// 리듀서 내보내기 -- store 저장
export default authSlice.reducer;

