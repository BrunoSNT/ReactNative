import React from 'react'
import {View, StyleSheet} from 'react-native'

// Para renderizar esse arquivo
// Mude o AppRegistry em index.js
// de `=> Menu` para => `App`

//Exemplos 01
import Simple from './components/Simple'
import Simple2 from './components/Simple2'
import Simple3 from './components/Simple3'

//Exemplos 02
import Oddeven from './components/Oddeven'
import Oddeven2 from './components/Oddeven2'


//Exemplo 03
import {Invert, Lottery} from './components/Multi'

// Classe principal que retorna a interface grafica
// Renderiza componentes importados de diversos locais
// E passa parametros (props) diversos.
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simple text = "Flex One"/>
        <Simple2 text = "Flex Two"/>
        <Simple3 text = "Flex Three"/>
        <Oddeven number = {2}></Oddeven>
        <Oddeven2 number = {3}></Oddeven2>
        <Invert text = "Invertido"></Invert>
        <Lottery numbers={4}></Lottery>
      </View>
    )
  }
}

//Estilo basicos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})