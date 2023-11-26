import { createSlice } from "@reduxjs/toolkit";
import { getTokenToServerAPI } from "../APIS/OAuthApiCalls";

// 초기값
const initialState = {
    scope:'',
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
                state.user_seq_no = payload.user_seq_no;
                state.scope = payload.data.scope;
          })
      },
});

// 액션 생성자 내보내기
export const { tokenAction } = OpenBankingSlice.actions;

// 리듀서 내보내기 -- store 저장
export default OpenBankingSlice.reducer;

