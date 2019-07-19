import React from 'react'
import {Text}from 'react-native'
import Base from '../style/Base'

export const Invert = props => {
    const inv = props.text.split('').reverse().join('')
    return <Text style={Base.default}>{inv}</Text>
}

export const Lottery = props => {
    const [min, max] = [1,60]
    const my_numbers = Array(props.numbers || 6).fill(0)

    for (let i = 0; i < my_numbers.length; i++) {
        let actual = 0
        while (my_numbers.includes(actual)) {
            actual = Math.floor(Math.random() * (max - min + 1)) + min
        }
        my_numbers[i] = actual
    }

    my_numbers.sort((a,b) => a - b )
    return <Text style={Base.default}>{my_numbers.join(', ')}</Text>
}

export default Invert // Exporta a Invert() como padrao
// export { Invert, Lottery } => precisa retirar o export das func()