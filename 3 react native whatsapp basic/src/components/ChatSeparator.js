import React from 'react';
import {View, StyleSheet} from 'react-native';

const ChatSeparator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.transparent}></View>
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  transparent: {
    width: 115, // 80(witdh of profilepictures in chat preview) + 20 + 15(these are spaces)
    borderWidth: 1,
    borderColor: 'transparent', // This section will be invisible
  },

  separator: {
    flex: 1, // Remainder of separator will be visible
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
});

export default ChatSeparator;
