import React from 'react';
import {SafeAreaView, FlatList, View, Text, StyleSheet} from 'react-native';
import products_data from './products_data.json';
import ProductCard from './components/productsCard';
import SearchBar from './components/searchBar';

const patikaStoreApp = () => {

  const renderProduct = ({item}) => <ProductCard product={item} />

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>PATIKASTORE</Text>
        <SearchBar></SearchBar>
        <FlatList 
          data={products_data}
          renderItem={renderProduct}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
  },

  body: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'purple',
    margin: 5,
  }

})

export default patikaStoreApp;
