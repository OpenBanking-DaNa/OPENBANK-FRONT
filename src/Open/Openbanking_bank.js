import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import OpenCss from './Openbanking.module.css';
import { getSecretAPI, authorizeAPI } from '../APIs/OAuthApiCalls';

function Openbanking_bank() {

    const loginMember = useSelector(state => state.auth);

    console.log("Openbanking - loginMember", loginMember);

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const handleButtonClick = useCallback(() => {

        // 폼을 프로그래밍 방식으로 제출
        const form = document.getElementById('openbankingForm');
        form.submit();
    }, []);

    const [authData, setAuthData] = useState({
        code: code,
        client_id: loginMember.clientId,
        redirect_uri: process.env.REACT_APP_OB_REDIRECT_URI,
        grant_type: 'authorization_code',
        client_secret: '',
    });

    console.log('Openbanking_bank - authData: ', authData);

    useEffect(() => {
        if (code) {

            const fetchData = async () => {

                console.log("loginMember.loginMember.memberCode : " + loginMember.memberCode);

                const memberCode = loginMember.memberCode;

                try {
                    const secretData = await getSecretAPI(memberCode);
                    console.log('API secretData:', secretData);
                    console.log('API secretData.data.clientSecret:', secretData.data.clientSecret);

                    setAuthData(prevAuthData => ({
                        ...prevAuthData,
                        client_secret: secretData.data.clientSecret,
                    }));

                    console.log('API authData:', authData);



                    try {
                        const response = await authorizeAPI(authData);
                        console.log('API Response:', response);
                    } catch (error) {
                        console.error('API Request Failed:', error);
                    }

                } catch (error) {
                    console.error('API Request Failed:', error);
                }
            };
            fetchData();
        }
    }, [code]);

    // useEffect(() => {
    //     if (authData.client_secret) {

    //         const fetchData = async () => {
    //             try {
    //                 const response = await authorizeAPI(authData);
    //                 console.log('API Response:', response);


    //             } catch (error) {
    //                 console.error('API Request Failed:', error);
    //             }
    //         };
    //         fetchData();
    //     }
    // }, [authData]);




    return (
        <>
            <h2>은행 권한요청</h2>
            <form
                id="openbankingForm"
                method="get"
                action="https://testapi.openbanking.or.kr/oauth/2.0/authorize"
                target="_blank"
            >
                <input type="hidden" name="response_type" value="code" />
                <input type="hidden" name="client_id" value={loginMember.clientId} />
                <input type="hidden" name="redirect_uri" value="http://localhost:3000/open" />
                <input type="hidden" name="scope" value="login inquiry transfer" />
                <input type="hidden" name="state" value="12345678901234567890123456789012" />
                <input type="hidden" name="auth_type" value="0" />
            </form>
            <button className={OpenCss.button} onClick={handleButtonClick}>
                권한
            </button>
        </>
    );
}

export default Openbanking_bank;