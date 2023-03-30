import React from 'react';
import { useState } from 'react';
import axios from "axios";

const TranPage = () => {
    //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 GTP TOKEN
    const [buttonPreview, setButtonPreview] = useState("SUBIR")
    const [transcribeButtonText, setTranscribeButtonText] = useState("TRANSCRIBE")
    const [status, setStatus] = useState("No recibido, inténtalo de nuevo...")
    const [showGetStatusButton, setGetStatusButton] = useState(false)
    const [isUrl, setIsUrl] = useState(false);
    const [isIdReceived, setIsIdReceived] = useState(false)
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [ID, setID] = useState('');
    const [info, setInfo] = useState(null);
    const [errors, setErrors] = useState(null);

    const [prop, setProp] = useState('Indicame las principales conclusiones de este texto como si fueras un consultor experto que está asesorando a una empresa en cómo crear un producto sobresaliente :')

    const [generat, setGenerate] = useState(false);


    const [response, setResponse] = useState('');

    const generateText = async () => {
        setGenerate(true)
        const promptF = prop + ' ' + info?.text;

        let data = JSON.stringify({
            "prompt": promptF,
            "temperature": 0.7,
            "max_tokens": 460,
            "n": 1
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.openai.com/v1/engines/text-davinci-002/completions',
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setResponse(response.data.choices[0].text);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onChange = (e) => {
        setButtonPreview(e.target.files[0].name)
        setFile(e.target.files[0]);
    }
    const postRequest = () => {
        setIsUrl(false);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: url })
        };
        fetch('https://touken.io/transcript/api/transcriptions', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data.id);
                setID(data.id)
                setIsIdReceived(true)
            });
    }
    const getStatusForTranscription = () => {

        setIsIdReceived(false)
        setGetStatusButton(true)


        fetch(`https://touken.io/transcript/api/transcriptions/${ID}`)
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                setInfo(data);
                setStatus(data.status)
                console.log(data.status)
                if (data.status == 'completed') {
                    console.log(data.chapters);
                }

            })
            .catch(error => {
                setIsIdReceived(false)
                setErrors(error);
                console.error(error);
            });


    }


    const onClick = async (e) => {
        if (file === null) {
            console.log("Add a file");
        }
        setTranscribeButtonText("Transcribing...")
        const config = {
            headers: {
                authorization: "b8ad47acb37a4ce5a5e83ba908c75b15",
                "content-type": "application/json",
                "transfer-encoding": "chunked"
            }
        }
        try {
            axios.post("https://api.assemblyai.com/v2/upload", file, config).then((res) => {
                console.log(res.data.upload_url);
                setUrl(res.data.upload_url);
                setIsUrl(true);
            });
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div className='main'>
            {isUrl && postRequest()}



            {isIdReceived && getStatusForTranscription()}

            <div style={{ paddingLeft: "1vw" }}>
                <div className='two-content-1'>
                    <h1>Subir Archivo</h1>
                    <p>los tipos aceptados son .mp3 y .mp4</p>
                    <form onChange={(e) => onChange(e)}>
                        <label className='custom-file-upload'>
                            <input type='file' className='file-upload' />
                            <a className='rounded-button'>{buttonPreview}</a>
                        </label>
                        <br />
                        {showGetStatusButton == false && <btn className='rounded-button' onClick={(e) => { onClick(e) }}>{transcribeButtonText}</btn>}
                        <br />
                        <div>
                            {showGetStatusButton && <btn className='rounded-button' onClick={(e) => { getStatusForTranscription(e) }}>Ver estatus</btn>}
                            {showGetStatusButton && <p className='chapter-description'>{status}</p>}
                        </div>
                    </form>
                </div>
            </div>

            <div className="two-content-2">
                <ul>
                    <div>Prop actual : <input value={prop} onChange={(e) => setProp(e.target.value)}></input></div>
                    {(showGetStatusButton && status == "completed") ? <p className='chapter-description' style={{ marginLeft: "0" }}>{info?.text}<br /><br /><br />
                        <btn className='rounded-button center' onClick={generateText}>Obtener resultado</btn><br /><br />
                        <div>{response && 'Respuesta de GTP:' + response}</div></p> : null}
                </ul>
            </div>
        </div>
    );
};


export default TranPage;
