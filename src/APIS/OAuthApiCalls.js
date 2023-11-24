
// export const authorizeAPI = async() => {

//     try{

//         const requestURL = `${process.env.REACT_APP_BASIC_URL}/api/oauth/authorize`;

//         const response = await fetch(requestURL, {

//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
            
//         })

//     } catch(e) {
//         console.error("권한 요청 오류");

//     }
// } 



export const authorizeAPI = async(tokenRequest) => {

    try{

        console.error(tokenRequest, "tokenRequest");

        const requestURL = `${process.env.REACT_APP_BASIC_URL}/api/oauth/token`;

        const response = await fetch(requestURL, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tokenRequest),
            
        })

        console.log("token response ======= ", response.json());


    } catch(e) {
        console.error(e.message, "권한 요청 오류");

    }
} 

