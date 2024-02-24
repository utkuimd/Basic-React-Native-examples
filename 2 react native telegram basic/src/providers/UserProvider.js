import React, {useState} from 'react';
import {UserContext} from '../contexts/user';

const UserProvider = ({children}) => {
  const [userState, setUserState] = useState({});

  return (
    <UserContext.Provider
      value={{
        user: userState,
        setUser: setUserState,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
