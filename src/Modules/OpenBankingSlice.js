import { createSlice } from "@reduxjs/toolkit";
import { getTokenToServerAPI } from "../APIS/OAuthApiCalls";

// 초기값
const initialState = {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAxMDQxMDg1Iiwic2NvcGUiOlsiY2FyZGluZm8iLCJsb2dpbiJdLCJpc3MiOiJodHRwczovL3d3dy5vcGVuYmFua2luZy5vci5rciIsImV4cCI6MTcwODU5Mzk0NiwianRpIjoiYTY0OTQzOTgtOWZmYy00OGFmLThlNWItN2QzNDI5ZTAzNzMyIn0.ZYdNTJSEJRWvodUY15HYDixtRM7TX-6duE_q5VbjqU4',
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
        

    }, 
    extraReducers: (builder) => {
        builder
          .addCase(getTokenToServerAPI.fulfilled, (state, { payload }) => {
            // state.user_seq_no = payload.user_seq_no;
                state.memberId = payload.data.memberId;
                state.accessExp = payload.data.accessTokenExpiresIn;
                state.refreshExp = payload.data.refreshTokenExpiresIn;
                state.isLogin = true;
                state.isTempPwd = payload.data.isTempPwd;
                state.clientId = payload.data.clientId;
          })
      },
});

// 액션 생성자 내보내기
export const { tokenAction } = OpenBankingSlice.actions;

// 리듀서 내보내기 -- store 저장
export default OpenBankingSlice.reducer;

