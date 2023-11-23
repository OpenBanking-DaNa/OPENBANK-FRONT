
export const CardAuthTokenAPI = async() => {

    try{

        const requestURL = `https://testapi.openbanking.or.kr/oauth/2.0/token`;

        const response = await fetch(requestURL, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            body: {
                "code":"dS289Gl7NS8nlj1qNXMChicZkecl58",
                "client_id":"4e542766-aa17-4ff2-aa26-775da489d71c",
                "client_secret" :"005ddb1b-65d0-4277-9c4d-1ca1e38cb4d8" ,
                "redirect_uri":"http://localhost:3000/open",
                "grant_type":"authorization_code"
            }
            
        });

        console.log("token response =======", response.json());

    } catch(e) {
        console.error(e.message + "토큰 요청 오류");

    }
} 