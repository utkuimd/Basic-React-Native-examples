import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../contexts/theme';

const ChangeTheme = () => {
  const {theme, setLightTheme, setDarkTheme} = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <TouchableOpacity style={styles.lightBox} onPress={setLightTheme}>
        <Text style={styles.lightBox_text}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.darkBox} onPress={setDarkTheme}>
        <Text style={styles.darkBox_text}>Dark</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBox: {
    width: '40%',
    height: '20%',
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBox: {
    width: '40%',
    height: '20%',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBox_text: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'black',
  },
  darkBox_text: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ChangeTheme;
