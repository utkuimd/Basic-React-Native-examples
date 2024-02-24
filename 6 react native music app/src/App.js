/*Build music app using state variable and custom components-----------------*/
import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/songCard';
import SearchBar from './components/searchBar';

const musicApp = () => {

  const renderSong = ({item}) => <SongCard song={item} />
  const renderSeparator = () => <View style={styles.separator}/>

  const [list, setList] = useState(music_data)

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    })
    setList(filteredList)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar
          onSearch={handleSearch}
        />
        <FlatList 
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  separator: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },

})

export default musicApp;
/*---------------------------------------------------------------------------*/
