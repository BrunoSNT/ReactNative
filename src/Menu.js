import React from 'react'
import { Button, View, Text} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

//Exemplos 01
import Simple from './components/Simple'
import Simple2 from './components/Simple2'
import Simple3 from './components/Simple3'

//Exemplos 02
import Oddeven from './components/Oddeven'
import Oddeven2 from './components/Oddeven2'


//Exemplo 03
import {Invert, Lottery} from './components/Multi'
import Base from './style/Base';


//Exemplo 04
import Count from './components/Count'
import Count2 from './components/Count2'
import Count3 from './components/Count3'

//Componente que servirá de Home
//Renderiza os components de botoes
//Que leva a as screens relativas
class HomeScreen extends React.Component {
    render () {
        return (
            <View>
                <Text style={Base.homeTitle}>Home Screen</Text>
                <Button
                    title="Simple"
                    onPress={() => this.props.navigation.navigate('Simple')}
                />
                <Button
                    title="Simple2"
                    onPress={() => this.props.navigation.navigate('Simple2')}
                />
                <Button
                    title="Simple3"
                    onPress={() => this.props.navigation.navigate('Simple3')}
                />
                <Button
                    title="Oddeven"
                    onPress={() => this.props.navigation.navigate('Oddeven')}
                />
                <Button
                    title="Oddeven2"
                    onPress={() => this.props.navigation.navigate('Oddeven2')}
                />
                <Button
                    title="Invert"
                    onPress={() => this.props.navigation.navigate('Invert')}
                />
                <Button
                    title="Lottery"
                    onPress={() => this.props.navigation.navigate('Lottery')}
                />
                <Button
                    title="Count"
                    onPress={() => this.props.navigation.navigate('Count')}
                />
                <Button
                    title="Count2"
                    onPress={() => this.props.navigation.navigate('Count2')}
                />
                <Button
                    title="Count3"
                    onPress={() => this.props.navigation.navigate('Count3')}
                />
            </View>
        );
    }
}

//Inicia as paginas de navegacao
const AppNavigator = createStackNavigator ({
    Home: {
        screen: HomeScreen
    },   
    Simple: {
        screen: () => <Simple text="Flex One"/>
    },
    Simple2: {
        screen: () => <Simple2 text="Flex Two"/>
    },
    Simple3: {
        screen: () => <Simple3 text="Flex Three"/>
    },
    Oddeven: {
        screen: () => <Oddeven number={2}/>
    },
    Oddeven2: {
        screen: () => <Oddeven2 number={3}/>
    },
    Lottery: {
        screen: () => <Lottery numbers={4} />,
        navigationOptions: { title: "Lottery"}
    },
    Invert: {
        screen: () => <Invert text="Invert"/>
    },
    Count: {
        screen: () => <Count/>
    },
    Count2: {
        screen: () => <Count2/>
    },
    Count3: {
        screen: () => <Count3/>
    },
})

//exporta o navegador
export default createAppContainer(AppNavigator);
