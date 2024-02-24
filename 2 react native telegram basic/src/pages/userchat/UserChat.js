import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {MessageContext} from '../../contexts/messages';
import {ThemeContext} from '../../contexts/theme';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMatCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const UserChat = props => {
  const userObject = props.route.params.userObject;

  const {allMessage, setAllMessage} = useContext(MessageContext);
  const {theme} = useContext(ThemeContext);

  const [messageId, setMessageId] = useState(0);
  const [messageText, setMessageText] = useState('');

  const userMessage = allMessage.filter(
    message => message.receiverId === userObject.id,
  );

  const sendMessage = () => {
    setMessageId(messageId + 1);
    setAllMessage([
      ...allMessage,
      {
        messageId: messageId,
        receiverId: userObject.id,
        messageText: messageText,
      },
    ]);
    setMessageText('');
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*--------HEADER---------*/}
      <View style={[styles.header, {backgroundColor: theme.headerColor}]}>
        <TouchableOpacity style={styles.goBack} onPress={goBack}>
          <IconFeather name="chevron-left" size={40} color="#1F51FF" />
          <Text style={styles.goBack_text}>Back</Text>
        </TouchableOpacity>
        <View style={styles.userDetails}>
          <View style={styles.userName}>
            <Text style={[styles.firstName, {color: theme.color}]}>{userObject.firstName}</Text>
            <Text style={[styles.lastName, {color: theme.color}]}>{userObject.lastName}</Text>
          </View>
          <Text style={styles.lastSeen}>{userObject.lastSeen}</Text>
        </View>
        <Image
          style={styles.profilePicture}
          source={{uri: userObject.profilePicture}}
        />
      </View>
      {/*--------BODY---------*/}
      <View style={styles.body}>
        <ImageBackground
          source={{uri: theme.imageBackground}}
          style={styles.backgroundImage}>
          {userMessage.map(message => {
            return (
              <View
                style={styles.sendedMessage}
                key={message.messageId.toString()}>
                <Text style={styles.sendedMessage_text}>
                  {message.messageText}
                </Text>
              </View>
            );
          })}
        </ImageBackground>
      </View>
      {/*--------FOOTER---------*/}
      <View style={[styles.footer, {backgroundColor: theme.headerColor}]}>
        <IconFeather name="paperclip" size={30} color="#949494" />
        <View
          style={[styles.sendMessage, {backgroundColor: theme.textboxColor}]}>
          <TextInput
            placeholder="Message"
            placeholderTextColor={'#949494'}
            value={messageText}
            onChangeText={setMessageText}
            style={[styles.inputText, {color: theme.color}]}
          />
          <IconFeather name="pocket" size={25} color="#949494" />
        </View>
        <IconMatCommunity
          name={messageText === '' ? 'microphone-outline' : 'send'}
          size={30}
          color="#949494"
          onPress={messageText !== '' ? sendMessage : null}
        />
      </View>
    </SafeAreaView>
  );
};

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
    paddingRight: 10,
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBack_text: {
    color: '#1F51FF',
    fontSize: 18,
  },
  userDetails: {
    alignItems: 'center',
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
    fontWeight: 'bold',
    marginLeft: 5,
  },
  lastSeen: {
    fontSize: 16,
    color: 'gray',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  body: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  sendedMessage: {
    maxWidth: '80%',
    backgroundColor: '#8cff40',
    marginRight: 15,
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
  },
  sendedMessage_text: {
    fontSize: 20,
    color: 'black',
  },
  footer: {
    width: '100%',
    height: Dimensions.get('window').height / 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  sendMessage: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  inputText: {
    maxWidth: '80%',
  },
  message: {
    fontSize: 16,
  },
});

export default UserChat;
