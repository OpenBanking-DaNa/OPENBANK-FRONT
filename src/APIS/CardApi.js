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
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAxMDQxMDg1Iiwic2NvcGUiOlsiY2FyZGluZm8iLCJsb2dpbiJdLCJpc3MiOiJodHRwczovL3d3dy5vcGVuYmFua2luZy5vci5rciIsImV4cCI6MTcwODU5Mzk0NiwianRpIjoiYTY0OTQzOTgtOWZmYy00OGFmLThlNWItN2QzNDI5ZTAzNzMyIn0.ZYdNTJSEJRWvodUY15HYDixtRM7TX-6duE_q5VbjqU4`,
          
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

// import axios from 'axios';

// export const CardInfoAPI = (obData) => {
//   console.log("data");

//   const requestURL = `${process.env.REACT_APP_OB_CARDINFO_URL}?bank_tran_id=F120430304343&user_seq_no=1101041085&bank_code_std=399&member_bank_code=399`;

//   return async (dispatch, state) => {
//     try {
//       const response = await axios.get(requestURL, {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAxMDQxMDg1Iiwic2NvcGUiOlsiY2FyZGluZm8iLCJsb2dpbiJdLCJpc3MiOiJodHRwczovL3d3dy5vcGVuYmFua2luZy5vci5rciIsImV4cCI6MTcwODU5Mzk0NiwianRpIjoiYTY0OTQzOTgtOWZmYy00OGFmLThlNWItN2QzNDI5ZTAzNzMyIn0.ZYdNTJSEJRWvodUY15HYDixtRM7TX-6duE_q5VbjqU4`,
//         },
//       });

//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
// };

