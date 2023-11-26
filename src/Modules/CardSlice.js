import { createSlice } from "@reduxjs/toolkit";
import { getTokenToServerAPI } from "../APIS/OAuthApiCalls";
import { CardInfoAPI } from "../APIS/CardApi";

// 초기값
const initialState = {
    // Request 
    bank_tran_id:'',
    user_seq_no:'',
    bank_code_std:'',
    member_bank_code:'',

    // Response 
    resCardInfo:'',


}


const CardSlice = createSlice({
    name: 'CardInfo',
    initialState,
    reducers: {
      getCardInfoAction: (state, { payload }) => {
        // getCardInfoAction에 대한 로직을 처리하려면 이곳에 작성
      },
      setBankCode: (state, { payload }) => {
        state.bank_code_std = payload;
        state.member_bank_code = payload;
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(getTokenToServerAPI.fulfilled, (state, { payload }) => {
            state.user_seq_no = payload.user_seq_no;
          })
          .addCase(CardInfoAPI.fulfilled, (state, {payload})=>{
            state.resCardInfo = payload;

          })
      },
    
  });
  

// 액션 생성자 내보내기
export const { getCardInfoAction, setBankCode } = CardSlice.actions;

// 리듀서 내보내기 -- store 저장
export default CardSlice.reducer;

