import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import user_list from '../contacts-list.json';
import {ThemeContext} from '../contexts/theme';
import {useNavigation} from '@react-navigation/native';

const ChatPreview = ({receiverID}) => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();
  const userTakeMessage = user_list.find(user => user.id === receiverID);

  const gotoUserChat = () => {
    const userObject = {
      profilePicture: userTakeMessage.profilePictureURL,
      firstName: userTakeMessage.firstName,
      lastName: userTakeMessage.lastName,
      lastSeen: userTakeMessage.lastSeen,
      id: userTakeMessage.id,
    };
    navigation.navigate('UserChatScreen', {userObject});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={gotoUserChat}>
      <Image
        style={styles.profilePicture}
        source={{uri: userTakeMessage.profilePictureURL}}
      />
      <View style={styles.userName}>
        <Text style={[styles.firstName, {color: theme.color}]}>{userTakeMessage.firstName}</Text>
        <Text style={[styles.lastName, {color: theme.color}]}>{userTakeMessage.lastName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  userName: {
    flexDirection: 'row',
    marginLeft: 15,
    alignSelf: 'center',
    marginBottom: 15,
  },
  firstName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  lastName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
});

export default ChatPreview;
