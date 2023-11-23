
export const authorizeAPI = async() => {

    try{

        const requestURL = `${process.env.REACT_APP_BASIC_URL}/api/oauth/authorize`;

        const response = await fetch(requestURL, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            
        })

    } catch(e) {
        console.error("권한 요청 오류");

    }
} 