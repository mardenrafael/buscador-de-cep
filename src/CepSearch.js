import React, { useState, useEffect } from "react";
import CepList from "./CepList"
import "./CEPSearch.css";
import cep from "cep-promise";



function CEP_search(props) {


    const[inputValue, setInputValue] = useState("");
    const[response, setResponse] = useState({});
    const[visibiltyController, setVisibilty] = useState(false);
    


    function handleChangeInput(event) {
        setInputValue(event.target.value)
    }

    async function fecthCepData(cepToSearch) {
        const cepResponse = await cep(cepToSearch);
        setResponse(cepResponse);
        setVisibilty(true);
    }

    function isValid(obj) {
        if (isNaN(parseInt(obj)) || obj.length != 8) {
            return false
        } else {
            return true
        }
    }

    useEffect(() => {
        if ( isValid(inputValue) ) {
            fecthCepData(inputValue)
        }
    }, [inputValue])

        return(
        <div className='input-container'>
            <label htmlFor="cep-input">Insira o CEP: </label>
            <input type={'text'} placeholder='xxxxxxxx' id="cep-input" onChange={handleChangeInput}></input>

            <h3>
                Confira se o CEP informado tem 8 (oito) numeros e que não possua letras nem simbolos!!
            </h3>
        
            <div className={visibiltyController ? "show" : "hide" }>
                <CepList response={response}/>
            </div>
        </div>
        );
}

export default CEP_search
