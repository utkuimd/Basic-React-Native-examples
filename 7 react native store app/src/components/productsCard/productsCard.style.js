import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#eceff1",
        margin: 5,
        padding: 10,
        borderRadius: 5,
    },

    body: {
        marginTop: 5,
    },

    image: {
        height: Dimensions.get('window').height / 4,    // !!!
        width: '100%',                                  // !!!
        resizeMode: 'contain',                          // !!!
        backgroundColor: 'white',                       // !!!
        borderRadius: 5,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },

    price: {
        fontWeight: 'bold',
    },

    inStock: {
        fontWeight: 'bold',
        color: 'red',
    },

})