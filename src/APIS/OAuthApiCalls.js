
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
        // const requestURL = `${process.env.REACT_APP_OB_TOKEN_URL}`;
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

            // })
            // body: authData,

            body: {
                "code":authData.code,
                "client_id":"ed0e3ff9-a457-4752-b3bf-3bbc390771ef",
                "client_secret" :"98d67c6b-0c72-41ce-8292-0e2fc56b3476" ,
                "redirect_uri":"http://localhost:3000/open",
                "grant_type":"authorization_code"
            }
        });
        console.log("token response =======", response.json());

    } catch (e) {
        console.error(e.message + "토큰 요청 오류");

    }

    console.log("authorizeAPI end");
}

