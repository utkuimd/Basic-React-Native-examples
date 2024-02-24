import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Message from '../components/Message';
import IconFeather from 'react-native-vector-icons/Feather';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';

function Chats(props) {
  // Take data coming from home screen.
  const chat = props.route.params.chatObject;

  const renderMessage = ({item}) => <Message message={item} />;
  const backgroundLink =
    'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png';

  //Go back to previous screen.
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*Header section of chat screen*/}
      <View style={styles.userSection}>
        <TouchableOpacity onPress={goBack}>
          <IconFeather name="chevron-left" size={35} color="#1F51FF" />
        </TouchableOpacity>
        <View style={styles.userDetail}>
          <Image
            style={styles.profilePicture}
            source={{uri: chat.profilePicture}}
          />
          <Text style={styles.username}>
            {chat.firstName} {chat.lastName}
          </Text>
        </View>
        <View style={styles.callUser}>
          <IconFeather name="video" size={30} color="#1F51FF" />
          <IconFeather name="phone" size={30} color="#1F51FF" />
        </View>
      </View>
      {/*Body section of chat screen*/}
      <View style={styles.chatSection}>
        <ImageBackground
          style={styles.background}
          source={{uri: backgroundLink}}>
          <FlatList
            data={chat.messages}
            renderItem={renderMessage}
            bounces={true}
          />
          {/*In Flatlist, bounces property will not work on Android OS.*/}
        </ImageBackground>
      </View>
      {/*Footer section of chat screen*/}
      <View style={styles.messageSection}>
        <IconFeather name="plus" size={35} color="#1F51FF" />
        <View style={styles.sendMessage}>
          <IconFeather name="file" size={25} style={styles.iconGif} />
        </View>
        <IconFeather name="camera" size={30} color="#1F51FF" />
        <IconSimpleLine name="microphone" size={30} color="#1F51FF" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  userSection: {
    width: '100%',
    height: Dimensions.get('window').height / 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },

  userDetail: {
    flex: 1.75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  callUser: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },

  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },

  chatSection: {
    flex: 1,
  },

  background: {
    width: '100%',
    height: '100%',
    paddingTop: 5,
  },

  messageSection: {
    width: '100%',
    height: Dimensions.get('window').height / 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  sendMessage: {
    width: '50%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  iconGif: {
    color: '#1F51FF',
    transform: [{rotateX: '180deg'}],
    marginRight: 10,
  },
});

export default Chats;
