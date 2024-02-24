import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from './SearchBar';

const FlatlistHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchChats}>
        <Text style={styles.searchChats_text}>Sohbetler</Text>
        <SearchBar />
      </View>
      <View style={styles.createGroupOrLists}>
        <Text style={styles.createMessageLists}>Toplu Mesaj Listeleri</Text>
        <Text style={styles.createGroup}>Yeni Grup</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchChats: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },

  searchChats_text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },

  createGroupOrLists: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },

  createMessageLists: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },

  createGroup: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },

  separator: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
});

export default FlatlistHeader;
