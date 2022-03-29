import React from 'react';
import './App.css';

/*
TODO List:
  formatar string para o formato correto (8 numeros apenas)
  se tiver letra emitir um alerta com o erro e pedir para o usuario inserir novamente
  se estiver tudo correto enviar um request com o CEP
  formatar o arquvio de resposta (JSON)
  mostrar na tela o resultado da pesquisa 


*/


class CEP_search extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      inputValue: ""
    }
  

    this.handleIputChange = this.handleIputChange.bind(this)
    this.handleClickButton = this.handleClickButton.bind(this)

  }

  handleIputChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  handleClickButton() {
    this.formatString()
  }


  formatString() {
    console.log(this.state.inputValue)
  }

  render() {
    return(
      <div className='input-container'>
        <input type={'text'} placeholder='Insira o CEP para pesquisar' onChange={this.handleIputChange}></input>
        <button onClick={this.handleClickButton}>pesquisar</button>
      </div>
    );
  }
}


function App() {
  return (
    <div className='App-header'>
      <div className='App'>
        <CEP_search/>
      </div>
    </div>
  );
}

export default App;
