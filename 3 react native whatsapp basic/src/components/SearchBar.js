import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

const SearchBar = () => {
  return (
    <View style={styles.searchArea}>
      <View style={styles.searchInputContainer}>
        <IconFeather name="search" size={25} style={styles.searchIcon} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor={'#908f8f'}
          // TextInput has no functionality so "onChangeText={() => null}"
          onChangeText={() => null}
          style={styles.searchInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchArea: {
    margin: 1,
  },

  searchInputContainer: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#d3d3d3',
    flexDirection: 'row',
    paddingLeft: 7,
  },

  searchInput: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
  },

  searchIcon: {
    alignSelf: 'center',
    color: 'gray',
  },
});

export default SearchBar;
