/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';  // Para renderizar substitua abaixo
import {name as appName} from './app.json';
import Menu from './src/Menu'

AppRegistry.registerComponent(appName, () => Menu); // <- Remova `Menu` e 
                                                    // coloque `App`para
                                                    // render diferenciado
