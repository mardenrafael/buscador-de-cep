import React, { useState, useEffect } from "react";
import cep from "cep-promise";


/*
    Fazer a chamada para API cep-promise
    CHecar se o input esta correto
    Formatar o JSON que retorna
    Exibir o resultado para o usuario
*/

function CEP_search(props) {


    const[inputValue, setInputValue] = useState("");
    const[response, setResponse] = useState({});

    function handleChangeInput(event) {
        setInputValue(event.target.value)
    }

    function handleSubmit() {
        if (isValid(inputValue)) {
            console.log(inputValue)
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
        if ( inputValue != "") {
            console.log("Effect")
        }
    })

        return(
        <div className='input-container'>
            <input type={'text'} placeholder='Insira o CEP para pesquisar' onChange={handleChangeInput}></input>
            
            <button onClick={handleSubmit}>pesquisar</button>

            <h3>
            Confira se o CEP informado tem 8 (oito) numeros e não possua letras!!
            </h3>
        
            <div className='response-container'>
            <ul className='cep-list'>
                <li>
                CEP: {}
                </li>
                <li>
                Estado: {}
                </li>
                <li>
                Cidade: {}
                </li>
                <li>
                Rua: {}
                </li>
                <li>
                bairro: {}
                </li>
            </ul>
            </div>
        </div>
        );
}

export default CEP_search
