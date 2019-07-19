import React from 'react'
import {Button, View, Text, TouchableHighlight} from 'react-native'
import Base from '../style/Base';

//Contador, precisa ser 
//iniciado por classe pois 
//iremos gerenciar estados
export default class Count3 extends React.Component {

    //Estado
    //Estado->numero iniciado em 0
    state = {
        number: 0
    }

    //Para nao precisar do Arrow func() no onPress
    constructor(props) {
        super(props)

        this.clear = this.clear.bind(this)
        this.plusOne = this.plusOne.bind(this)
    }

    //Nao precisamos mais mudar
    //o onPress. nem Arrow func()
    plusOne() {
        this.setState({number: this.state.number + 1})
    }

    //Nao precisamos mais mudar
    //o onPress. nem Arrow func()
    clear() {
        this.setState({number: 0})
    }

    render() {
        return (
            <View>
                <Text style={Base.default}>{this.state.number}</Text>
                <Button title="Increment" onPress={this.plusOne}></Button>
                <Button title="Clear" onPress={this.clear}></Button>
            </View>
        )
    }
}
