import React from 'react'  // Importa o React
import {Text} from 'react-native'  // Importa componente nativo de texto
import Base from '../style/Base'  // Importa estilo

// Exemplo de componente usando ES6 Function.
//Recebendo um prop chamado 'text' e renderizando
// com estilo referente no arquivo base de estilos
export default function(props) {
    return <Text style={Base.flex_one}>{props.text}</Text>
}