import React from 'react'
import {View, Text} from 'react-native'
import Base from '../style/Base'

function OddOrEven(num) {
    if(num % 2 == 0) { 
        return <Text style={Base.even}>Even</Text>
    } else {
        <Text style={Base.odd}>Odd</Text>
    }
}
// Componente com um condicional 
// Usamos o operador ternario para
// selecionar o a Tag a ser renderizada
export default props =>
    <View>
        {
            props.number % 2 == 0
            ? <Text style={Base.even}>Even</Text>
            : <Text style={Base.odd}>Odd</Text>
        }
    </View>
