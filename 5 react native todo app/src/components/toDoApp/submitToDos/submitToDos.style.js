import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgb(72, 92, 104)',
        margin: 10,
        borderRadius: 10,
    },

    input: {
        flex: 2,
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },

    textInput: {
        paddingBottom: 5,
        paddingTop: 5,
        color: '#C0C0C0',
    },

    input_line: {
        borderWidth: 1,
        borderColor: 'rgb(69, 113, 114)',
    },

    submit: {
        flex: 3,
        alignItems: 'center',
    },

    submit_button: {
        width: '80%',
        height: '60%',
        backgroundColor: '#808080',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    submit_button_text: {
        color: 'white',
        fontSize: 18,
        //fontWeight: 'bold',
    },



})