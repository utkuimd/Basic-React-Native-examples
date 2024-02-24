import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet, View} from 'react-native';
import ChatPreview from '../components/ChatPreview';
import ChatSeparator from '../components/ChatSeparator';
import FlatlistHeader from '../components/FlatlistHeader';
import chat_data from '../chat-data.json';
import IconFeather from 'react-native-vector-icons/Feather';

function Home(props) {
  // Use gotochat property for go to chat screen.
  const renderChatPreview = ({item}) => (
    <ChatPreview chat={item} gotochat={goToChat} />
  );
  const renderSeparator = () => <ChatSeparator />;

  // While pressed any chat preview on home screen,
  // user data will transfer from home screen to chat screen.
  const goToChat = id => {
    chat_data.map(chat => {
      // Is dataset contains chosen user id?
      if (chat.id === id) {
        // If answer is yes, take data of chosen user
        // and create object for sending to chat screen.
        const chatobject = {
          firstName: chat.firstName,
          lastName: chat.lastName,
          profilePicture: chat.profilePictureURL,
          messages: chat.messages,
        };
        // Go chat screen with created object.
        props.navigation.navigate('ChatScreen', {chatObject: chatobject});
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*Header section of home screen.*/}
      <View style={styles.editChats}>
        <Text style={styles.editChats_text}>Düzenle</Text>
        <IconFeather name="edit" size={25} color="blue" />
      </View>
      {/*Body section of home screen.*/}
      <FlatList
        ListHeaderComponent={() => <FlatlistHeader />}
        data={chat_data}
        renderItem={renderChatPreview}
        ItemSeparatorComponent={renderSeparator}
        bounces={true}
      />
      {/*In Flatlist, bounces property will not work on Android OS.*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  editChats: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  editChats_text: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
});

export default Home;
