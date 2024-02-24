import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './searchBar.style';

const searchBar = () => {
    return (
        <View style={styles.searchArea}>
            <View style={styles.searchInputContainer}>
                <TextInput 
                    placeholder="Search..."
                    placeholderTextColor={"#908f8f"}
                    style={styles.searchInput}
                />
            </View>
        </View>
    )
}

export default searchBar;
