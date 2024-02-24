import React, {useContext} from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemeContext} from '../contexts/theme';

const ContactList = ({contact, gotoUserChat}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => gotoUserChat(contact.id)}>
      <Image
        style={styles.profilePicture}
        source={{uri: contact.profilePictureURL}}
      />
      <View style={styles.body}>
        <View style={styles.userName}>
          <Text style={[styles.firstName, {color: theme.color}]}>{contact.firstName}</Text>
          <Text style={[styles.lastName, {color: theme.color}]}>{contact.lastName}</Text>
        </View>
        <Text style={styles.lastSeen}>{contact.lastSeen}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  body: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  userName: {
    flexDirection: 'row',
  },
  firstName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lastName: {
    fontSize: 20,
    marginLeft: 5,
  },
  lastSeen: {
    fontSize: 15,
    color: 'gray',
  },
});

export default ContactList;
