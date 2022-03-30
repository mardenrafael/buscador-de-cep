import React, { useState, useEffect } from "react";
import cep from "cep-promise";

class CEP_search extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        inputValue: "",
        cepResponse: "",
        elementsVisiblity: "hide"
        }
        

        this.handleIputChange = this.handleIputChange.bind(this)
        this.handleClickButton = this.handleClickButton.bind(this)

    }




    render() {
        return(
        <div className='input-container'>
            <input type={'text'} placeholder='Insira o CEP para pesquisar' onChange={this.handleIputChange}></input>
            
            <button onClick={this.handleClickButton}>pesquisar</button>

            <h3 className={this.state.elementsVisiblity}>
            Confira se o CEP informado tem 8 (oito) numeros e não possua letras!!
            </h3>
        
            <div className='response-container'>
            <ul className='cep-list'>
                <li>
                CEP: {this.state.cepResponse.cep}
                </li>
                <li>
                Estado: {this.state.cepResponse.state}
                </li>
                <li>
                Cidade: {this.state.cepResponse.city}
                </li>
                <li>
                Rua: {this.state.cepResponse.street}
                </li>
                <li>
                bairro: {this.state.cepResponse.neighborhood}
                </li>
            </ul>
            </div>
        </div>
        );
    }
}

export default CEP_search
