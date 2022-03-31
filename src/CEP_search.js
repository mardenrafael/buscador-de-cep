import React, { useState, useEffect } from "react";
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

        try {

            const cepResponse = await cep(cepToSearch);
            setResponse(cepResponse);
            setVisibilty(true)

        } catch (error) {
            console.log(error)
        }
    }

    /**
     * @param {String} obj String to valided
     * @returns {Boolean} return true if the obj is a Number and lenght is 8
     */
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
            <label htmlFor="cep-input">Insira o CEP:</label>
            <input type={'text'} placeholder='xxxxxxxx' id="cep-input" onChange={handleChangeInput}></input>

            <h3>
                Confira se o CEP informado tem 8 (oito) numeros e que não possua letras nem simbolos!!
            </h3>
        
            <div className={visibiltyController ? "show" : "hide" }>
            <ul className='cep-list'>
                <li>
                CEP: {response.cep}
                </li>
                <li>
                Estado: {response.state}
                </li>
                <li>
                Cidade: {response.city}
                </li>
                <li>
                Rua: {response.street}
                </li>
                <li>
                bairro: {response.neighborhood}
                </li>
            </ul>
            </div>
        </div>
        );
}

export default CEP_search
