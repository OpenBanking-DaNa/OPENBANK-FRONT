import { useDispatch } from "react-redux";
import { tokenAction } from "../Modules/OpenBankingSlice";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSecretAPI = async (memberCode) => {

    console.log("getSecretAPI start");

    const requestURL = `${process.env.REACT_APP_BASIC_URL}/api/oauth/secret/${memberCode}`;

    try {
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const secretData = await response.json();
        console.log('Server response:', secretData);
        return secretData;

    } catch (error) {
        console.error('Server request failed:', error.message);
    }

    console.log("getSecretAPI end");
};



export const authorizeAPI = async (authData) => {

    console.log("authorizeAPI start");
    console.log("authorizeAPI authData", authData);

    try {
        const requestURL = `https://testapi.openbanking.or.kr/oauth/2.0/token`;

        const response = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            // body: JSON.stringify({
            //     client_id: authData.client_id,
            //     client_secret: authData.client_secret,
            //     code: authData.code,
            //     grant_type: authData.grant_type,
            //     redirect_uri: authData.redirect_uri,

        });
        console.log("token response =======", response.json());

    } catch (e) {
        console.error(e.message + "토큰 요청 오류");
    }

    console.log("authorizeAPI end");
}

export const getTokenToServerAPI = createAsyncThunk(
    '',async (tokenRequest) => {
    try {
      const requestURL = `${process.env.REACT_APP_OB_TOKEN_URL}`;
      const response = await axios.post(requestURL, tokenRequest, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      });
  
      console.log("token response =======", response.data);
  
      if (!response.data.includes("code=400")) {
        // dispatch(tokenAction(response.data));
        return response.data;
      } else {
        alert("엑세스 토큰 발급 실패");
      }
    } catch (e) {
      console.error(e.message, "권한 요청 오류");
    }
  })