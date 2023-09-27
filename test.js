const axios = require("axios"); 

function getTranscription (URL) {
    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: process.env.PORTAUTH_ASSEMBLYAI,
            "content-type": "application/json",
        },
    });
    
    let response = assembly
        .post("/transcript", {
            audio_url: URL,
            language_code: "es",
        })

    return response
}

function getResponse(id){

    const transcript_id = id

    const assembly = axios.create({
        baseURL: "https://api.assemblyai.com/v2",
        headers: {
            authorization: process.env.PORTAUTH_ASSEMBLYAI,
            "content-type": "application/json",
        },
    });

    let res = assembly.get( `/transcript/${transcript_id}` )
    
    return res

}

async function helperFunction(id) {
    let result = await getResponse(id)
    console.log("Status received: " + result.status)
    return result.data
}

async function postingHelperFunction(url) {
    let response = await getTranscription(url)
    console.log("received transcription ID: " + response.data.id)
    return response.data

}

module.exports = {helperFunction, postingHelperFunction}