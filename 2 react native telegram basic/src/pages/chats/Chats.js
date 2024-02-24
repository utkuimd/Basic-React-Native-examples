import React, {useContext} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';
import {MessageContext} from '../../contexts/messages';
import {ThemeContext} from '../../contexts/theme';
import ChatPreview from '../../components/ChatPreview';
import IconFeather from 'react-native-vector-icons/Feather';

const Chats = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={[styles.header, {backgroundColor: theme.headerColor}]}>
        <Text style={styles.editText}>Edit</Text>
        <Text style={[styles.chatsText, {color: theme.color}]}>Chats</Text>
        <IconFeather name="edit" size={30} color="#1F51FF" />
      </View>
      <Chatlist />
    </SafeAreaView>
  );
};

function Chatlist() {
  return (
    <MessageContext.Consumer>
      {value => (
        <FlatList
          data={value.allMessage                  //Get all messages from all users
            .map(message => message.receiverId)   //Get only receiverId these messages
            .filter((receiverIDs, index) => {     //Remove same receiverIDs
              return (
                value.allMessage
                  .map(message => message.receiverId)
                  .indexOf(receiverIDs) === index //Result : contact-1, contact-2...
              );
            })}
          renderItem={({item}) => <ChatPreview receiverID={item} />} //Render these IDs.
        />
      )}
    </MessageContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height / 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  editText: {
    color: '#1F51FF',
    fontSize: 20,
  },
  chatsText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default Chats;
