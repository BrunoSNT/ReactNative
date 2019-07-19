import { StyleSheet } from 'react-native'


// Estilos que podem ser renderizados 
// em diferentes componentes por meio
// de style={Base.<ESTILO>}
export default StyleSheet.create({
    default: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    flex_one: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red',
        fontSize: 24,
        fontWeight: 'bold'
    },
    flex_two: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'green',
        fontSize: 24,
        fontWeight: 'bold'
    },
    flex_three: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'blue',
        fontSize: 24,
        fontWeight: 'bold'
    },
    odd: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'orange',
        fontSize: 24,
        fontWeight: 'bold'
    },
    even: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'purple',
        fontSize: 24,
        fontWeight: 'bold'
    }
})