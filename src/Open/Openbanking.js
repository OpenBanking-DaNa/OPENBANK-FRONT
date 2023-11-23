import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import OpenCss from './Openbanking.module.css';
import Openbanking_card from './Openbanking_card';

function Openbanking() {

    const loginMember = useSelector(state => state.auth);

    console.log("Openbanking - loginMember", loginMember);

    const handleButtonClick = useCallback(() => {

        // 폼을 프로그래밍 방식으로 제출
        const form = document.getElementById('openbankingForm');
        form.submit();
    }, []);

    useEffect(() => {

        const authData = {
            code: window.location.search
        
        };
        const requestURL = `${process.env.REACT_APP_BASIC_URL}/api/oauth/token`;
        console.log('authData: ', authData);

        fetch(requestURL , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: authData,
            // body: JSON.stringify(authData),
        }).then(response => response.json())
            .then(data => {
                console.log('서버 응답:', data);
            })
            .catch(error => {
                console.error('서버 요청 실패:', error);
            });
    }, []); 


    return (
        <>
            <h2>권한요청</h2>
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

            <Openbanking_card/>
        </>
    );
}

export default Openbanking;