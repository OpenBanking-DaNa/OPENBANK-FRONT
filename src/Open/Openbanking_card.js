import React, { useCallback, useEffect, useState } from 'react';
import OpenCss from './Openbanking.module.css';
import { CardAuthTokenAPI } from '../APIs/CardApi';
import { authorizeAPI } from '../APIs/OAuthApiCalls';

function Openbanking_card() {
    

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');


    const handleButtonClick = useCallback(() => {

        // 폼을 프로그래밍 방식으로 제출
        const form = document.getElementById('openbankingForm');
        form.submit();
    }, []);
    
    
    const authorData = {
        code: code,
        client_id: process.env.REACT_APP_OB_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_OB_REDIRECT_URI,
        grant_type: 'authorization_code',
        client_secret: ''
    }

    const tokenButtonClick = () => {
        // CardAuthTokenAPI();
        if(!code){
           
            alert("권한요청 먼저 수행되어야 함");
            handleButtonClick();
        }
        else {

            authorizeAPI(authorData);
            
        }
    
    };



    return (
        <>
            <h2>카드 권한요청</h2>
            <form
                id="openbankingForm"
                method="get"
                action={process.env.REACT_APP_OB_AUTHORIZATION_URL}
                target="_blank"
            >
                <input type="hidden" name="response_type" value="code" />
                <input type="hidden" name="client_id" value={process.env.REACT_APP_OB_CLIENT_ID} />
                <input type="hidden" name="redirect_uri" value={process.env.REACT_APP_OB_REDIRECT_URI}/>
                <input type="hidden" name="scope" value="login cardinfo" />
                <input type="hidden" name="state" value="12345678901234567890123456789012" />
                <input type="hidden" name="auth_type" value="0" />
            </form>
            <button className={OpenCss.button} onClick={handleButtonClick}>
                권한요청
            </button>

            <h2>카드 토큰발급</h2>
        
        
                <input type="hidden" name="code" value={code} />
                <input type="hidden" name="client_id" value={process.env.REACT_APP_OB_CLIENT_ID} />
                <input type="hidden" name="redirect_uri" value={process.env.REACT_APP_OB_REDIRECT_URL}/>
                <input type="hidden" name="grant_type" value="authorization_code" />
        
            <button className={OpenCss.button} onClick={tokenButtonClick}>
            토큰요청
            </button>


        </>
    );
}

export default Openbanking_card;
