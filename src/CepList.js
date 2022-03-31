function CepList(props) {
    
    return(
        <div>
            <ul className='cep-list'>
                <li>
                    CEP: {props.response.cep}
                </li>
                <li>
                    Estado: {props.response.state}
                </li>
                <li>
                    Cidade: {props.response.city}
                </li>
                <li>
                    Rua: {props.response.street} 
                </li>
                <li>
                    bairro: {props.response.neighborhood}
                </li>
            </ul>
        </div>
    )
}

export default CepList