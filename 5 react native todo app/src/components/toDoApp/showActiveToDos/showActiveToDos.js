import React from 'react';
import {View, Text} from 'react-native';
import styles from './showActiveToDos.style';

const showActiveToDos = ({toDos}) => {
    const activeToDos = toDos.filter(todo => todo.isActive)
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.title}>{activeToDos.length}</Text>
        </View>
    )
}

export default showActiveToDos;
