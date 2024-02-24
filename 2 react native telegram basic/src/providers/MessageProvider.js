import React, {useState} from 'react';
import {MessageContext} from '../contexts/messages';
//import {useNavigation} from '@react-navigation/native';

const MessageProvider = ({children}) => {
  const [allMessageState, setAllMessageState] = useState([]);

  return (
    <MessageContext.Provider
      value={{
        allMessage: allMessageState,
        setAllMessage: setAllMessageState,
      }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
