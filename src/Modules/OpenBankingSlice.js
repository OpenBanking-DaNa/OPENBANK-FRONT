import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = {
    accessToken: '',
    expiresIn: '',
    refreshToken:'',
    scope:'',
    tokenType:'',
    user_seq_no:'',

}

const OpenBankingSlice = createSlice({
    name: 'OpenBanking', // 리듀서 이름
    initialState,
    reducers: {
        tokenAction: (state, {payload}) => {

            state.memberId = payload.data.memberId;
            state.accessExp = payload.data.accessTokenExpiresIn;
            state.refreshExp = payload.data.refreshTokenExpiresIn;
            state.isLogin = true;
            state.isTempPwd = payload.data.isTempPwd;
            state.clientId = payload.data.clientId;
        },

    }

});

// 액션 생성자 내보내기
export const { loginAction, logoutAction } = OpenBankingSlice.actions;

// 리듀서 내보내기 -- store 저장
export default OpenBankingSlice.reducer;

