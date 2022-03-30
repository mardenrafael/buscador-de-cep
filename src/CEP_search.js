import React from "react";
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

    handleIputChange(event) {
        this.setState({ inputValue: event.target.value })
    }

    handleClickButton() {
        const isValid = this.isValidFormat()


        if (isValid) {
        let response;

        cep(this.state.inputValue)
        .then((resp) => {
            
            response = resp;

        }).catch((error) => {
            const errorMessage = error.errors[0].message;

            response = errorMessage;

        }).finally(() => {

            this.setState({ 
            cepResponse: response,

            })
        })
        }
    }

    /**
     * @returns {Boolean} if inputValue is only Number and Input lenght is equal 8, return true and set elementsVisiblity hide,
     * otherwise return false and set elementVisibilty show
     */
    isValidFormat() {
        
        const isNumber = this.isNumberOnly(this.state.inputValue);
        const inputLength = this.state.inputValue.length;

        if (isNumber && inputLength == 8) {
        this.setState({ elementsVisiblity: "hide" });
        return true
        
        } else {
        this.setState({ elementsVisiblity: "show" })
        return false
        }
    }

    /**
     * 
     * @param {String} obj
     * @returns {Boolean} Return boolean value if the Obj parameter is only number
     */
    isNumberOnly(obj) {
        return !isNaN(obj)
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
