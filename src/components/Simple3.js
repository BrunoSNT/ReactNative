import React from 'react'  // Importa o React
import {Text} from 'react-native'  // Importa componente nativo de texto
import Base from '../style/Base'  // Importa estilo

//Exemplo de componente usando ES6 Class.
//Recebendo um prop chamado 'text' e renderizando
// com estilo referente no arquivo base de estilos
export default class Simple3 extends React.Component {
    render() {
        return (
            <Text style={Base.flex_three}>{this.props.text}</Text>
        )
    }
}