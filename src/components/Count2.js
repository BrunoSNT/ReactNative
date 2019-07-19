import React from 'react'
import {Button, View, Text, TouchableHighlight} from 'react-native'
import Base from '../style/Base';

//Contador, precisa ser 
//iniciado por classe pois 
//iremos gerenciar estados
export default class Count2 extends React.Component {

    //Estado
    //Estado->numero iniciado em 0
    state = {
        number: 0
    }

    //Precisa ser arrow func() por conta do this
    plusOne = () => {
        this.setState({number: this.state.number + 1})
    }

    //Assim precisamos mudar no
    //onPress correspondente
    clear() {
        this.setState({number: 0})
    }

    render() {
        return (
            <View>
                <Text style={Base.default}>{this.state.number}</Text>
                <Button title="Increment" onPress={this.plusOne}></Button>
                <Button title="Clear" onPress={() => this.clear()}></Button>
            </View>
        )
    }
}
