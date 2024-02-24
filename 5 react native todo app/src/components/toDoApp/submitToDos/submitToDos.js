import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './submitToDos.style';

const submitToDos = ({setText, text, submitToDo}) => {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <TextInput 
                    placeholder='Yapılacak...'
                    placeholderTextColor={'#808080'}
                    style={styles.textInput}
                    onChangeText={setText}
                    value={text}
                />
                <View style={styles.input_line} />
            </View>
            <View style={styles.submit}>
                <TouchableOpacity style={styles.submit_button} onPress={submitToDo}>
                    <Text style={styles.submit_button_text}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default submitToDos;
