import React, { useCallback, useEffect, useState } from 'react';
import OpenCss from './Openbanking.module.css';

import { authorizeAPI, getTokenToServerAPI } from '../APIS/OAuthApiCalls';
import { useSelector } from 'react-redux';


function Openbanking_card() {


    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const loginMember = useSelector(state => state.auth);


    const authorButtonClick = useCallback(() => {

        // 폼을 프로그래밍 방식으로 제출
        const form = document.getElementById('openbankingForm_card');
        form.submit();
    }, []);

    const testBankButtonClick = useCallback(() => {

        // 폼을 프로그래밍 방식으로 제출
        const form = document.getElementById('openbankingForm_bank');
        form.submit();
    }, []);

    const authorData = {
        code: code,
        clientId: process.env.REACT_APP_OB_CLIENT_ID,
        redirectUri: process.env.REACT_APP_OB_REDIRECT_URI,
        grantType: 'authorization_code',
        clientSecret: '',
        memberId: "1111",
    }

    const tokenButtonClick = () => {
        if(!code){

            alert("권한요청 먼저 수행되어야 함");
            authorButtonClick();
        }
        else {

            getTokenToServerAPI(authorData);

        }

    };


    return (
        <>
            <h2>카드 인증요청</h2>
            <form
                id="openbankingForm_card"
                method="get"
                action={process.env.REACT_APP_OB_AUTHORIZATION_URL}
                target="_blank"
            >
                <input type="hidden" name="response_type" value="code" />
                <input type="hidden" name="client_id" value={process.env.REACT_APP_OB_CLIENT_ID} />
                <input type="hidden" name="redirect_uri" value={process.env.REACT_APP_OB_REDIRECT_URI} />
                <input type="hidden" name="scope" value="login cardinfo" />
                <input type="hidden" name="state" value="12345678901234567890123456789012" />
                <input type="hidden" name="auth_type" value="0" />
            </form>
            <button className={OpenCss.button} onClick={authorButtonClick}>
                요청
            </button>

            <h2>카드 토큰요청</h2>

            <form
                id="openbankingForm_cardToken"
                method="post"
                action={process.env.REACT_APP_OB_TOKEN_URL}
                target="_blank"
            >
                <input type="hidden" name="code" value={code} />
                <input type="hidden" name="client_id" value={process.env.REACT_APP_OB_CLIENT_ID} />
                <input type="hidden" name="redirect_uri" value={process.env.REACT_APP_OB_REDIRECT_URI} />
                <input type="hidden" name="client_secret" value={process.env.REACT_APP_OB_CLIENT_SECRET} />
                <input type="hidden" name="grant_type" value="authorization_code" />
            </form>

            <button className={OpenCss.button} onClick={tokenButtonClick}>
                요청
            </button>

            <h2>뱅킹 테스트 요청</h2>
            <form
                id="openbankingForm_bank"
                method="get"
                action={process.env.REACT_APP_OB_AUTHORIZATION_URL}
                target="_blank"
            >
                <input type="hidden" name="response_type" value="code" />
                <input type="hidden" name="client_id" value={process.env.REACT_APP_OB_CLIENT_ID} />
                <input type="hidden" name="redirect_uri" value={process.env.REACT_APP_OB_REDIRECT_URI} />
                <input type="hidden" name="scope" value="login inquiry" />
                <input type="hidden" name="state" value="12345678901234567890123456789012" />
                <input type="hidden" name="auth_type" value="0" />
            </form>
            <button className={OpenCss.button} onClick={testBankButtonClick}>
                요청
            </button>


        </>
    );
}

export default Openbanking_card;
