import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './toDos.style';

const toDos = ({toDos, changeIsActive, deleteToDo}) => {
    return (
        <TouchableOpacity 
            style={toDos.isActive ? styles.todo_normal : styles.todo_pressed}
            onPress={() => changeIsActive(toDos.id)}
            onLongPress={() => deleteToDo(toDos.id)}>
                <Text style={toDos.isActive ? styles.todo_text_notdone : styles.todo_text_done}>{toDos.text}</Text>
        </TouchableOpacity>
    )
}

export default toDos;
