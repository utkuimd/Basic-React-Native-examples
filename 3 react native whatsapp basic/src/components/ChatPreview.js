import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ChatPreview = ({chat, gotochat}) => {
  // Get information of text and date of the last message which sent by user.
  const lastText = chat.messages[chat.messages.length - 1].text;
  const lastDateTime = new Date(
    chat.messages[chat.messages.length - 1].datetime,
  );
  // Create new date for comparing with lastDateTime.
  const projectDate = new Date('2022-08-24T15:00:00.000Z');
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const handleDate = () => {
    // If the last message arrives on same "day" with project date.
    if (
      projectDate.getFullYear() === lastDateTime.getFullYear() &&
      projectDate.getMonth() === lastDateTime.getMonth() &&
      projectDate.getDate() === lastDateTime.getDate()
    ) {
      return (
        // "Hour : Minute" date format
        <Text style={styles.date}>
          {lastDateTime.getUTCHours()}:{lastDateTime.getUTCMinutes()}
        </Text>
      );
    }
    // If the last message arrives on same "week" with project date.
    else if (
      projectDate.getFullYear() === lastDateTime.getFullYear() &&
      projectDate.getMonth() === lastDateTime.getMonth() &&
      projectDate.getDate() - lastDateTime.getDate() < 7
    ) {
      // "Day Name" date format (Names of days coming from "days" array)
      return <Text style={styles.date}>{days[lastDateTime.getUTCDay()]}</Text>;
    }
    // Other conditions
    else {
      return (
        // "Day.Mouth.Year" date format
        <Text style={styles.date}>
          {lastDateTime.getUTCDate()}.{lastDateTime.getUTCMonth() + 1}.
          {lastDateTime.getUTCFullYear()}
        </Text>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      // Defined the gotochat property
      onPress={() => gotochat(chat.id)}>
      <Image
        style={styles.profilePicture}
        source={{uri: chat.profilePictureURL}}
      />
      <View style={styles.body}>
        <View style={styles.userAndText}>
          <Text style={styles.user}>
            {chat.firstName} {chat.lastName}
          </Text>
          <Text style={styles.lastText}>{lastText}</Text>
        </View>
        {/*According to conditions in function,
          show last message date format in screen*/}
        {handleDate()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },

  body: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    justifyContent: 'space-between',
  },

  userAndText: {
    maxWidth: '80%',
  },

  user: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  lastText: {
    fontSize: 16,
  },

  date: {
    fontSize: 16,
  },
});

export default ChatPreview;
