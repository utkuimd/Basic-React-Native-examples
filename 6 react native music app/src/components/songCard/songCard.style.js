import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row', 
        margin: 10,
    },

    body: {
        flex: 4,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingBottom: 10,
    },

    image: {
        height: 100,
        width: 100,         
        borderRadius: 50,    
        marginRight: 5,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
    },

    artist: {
        fontWeight: 'bold',
        color: 'black',
        marginRight: 10,
    },

    detail: {
        flexDirection: 'row',
    },

    footer: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        padding: 6,
        height: 30,
        borderRadius: 5,
        marginTop: 60,
    },

    footer_text: {
        color: 'red',
        fontSize: 12,
    },

})
