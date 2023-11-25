import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const CardInfoAPI = createAsyncThunk(
  'select/cardinfo',
  async (reqCard, thunkAPI) => {
    try {
      console.log("reqCard======" ,reqCard);

      const url = process.env.REACT_APP_OB_CARDINFO_URL;

      const response = await axios.get(url, {
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          // 'Access-Control-Allow-Headers': 'Content-Type',
          // 'Accept':'*/*',
          'Authorization': process.env.REACT_APP_OB_AccessTest,
          
        },
        params: {
          bank_tran_id: reqCard.bank_tran_id,
          user_seq_no: reqCard.user_seq_no,
          bank_code_std: reqCard.bank_code_std,
          member_bank_code: reqCard.member_bank_code,
        },
      });

      console.log(response.data);
      return response.data; // Return the data

    } catch (error) {
      console.error(error);
      return { error: true, message: 'An error occurred' };
    }
  }
);

