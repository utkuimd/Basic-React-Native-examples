import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    
    todo_normal: {
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 12,
        backgroundColor: '#ADFF2F',
        opacity: 0.8,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    
    todo_pressed: {
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 12,
        backgroundColor: '#ADFF2F',
        opacity: 0.2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    todo_text_notdone: {
        color: 'white',
        fontSize: 20,
    },

    todo_text_done: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic',
        textDecorationLine: 'line-through',
    },

})