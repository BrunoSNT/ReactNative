import React from 'react'  // Importa o React
import {Text} from 'react-native'  // Importa componente nativo de texto
import Base from '../style/Base'  // Importa estilo

//Exemplo de componente usando ES6 Arrow.
//Recebendo um prop chamado 'text' e renderizando
// com estilo referente no arquivo base de estilos
export default props => <Text style={Base.flex_two}>{props.text}</Text>
