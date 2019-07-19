import React from 'react'
import {Button, View, Text, TouchableHighlight} from 'react-native'
import Base from '../style/Base';

//Contador, precisa ser 
//iniciado por classe pois 
//iremos gerenciar estados
export default class Count extends React.Component {

    //Estado
    //Estado->numero iniciado em 0
    state = {
        number: 0
    }

    //Precisa ser arrow func() por conta do this
    //No Count2.js e Count3.js 
    //temos outras solucoes
    plusOne = () => {
        this.setState({number: this.state.number + 1})
    }

    clear = () => {
        this.setState({number: 0})
    }

    render() {
        return (
            <View>
                <Text style={Base.default}>{this.state.number}</Text>
                <TouchableHighlight onPress={this.plusOne}
                                    onLongPress={this.clear}>
                    <Text>Increment / Clear</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
