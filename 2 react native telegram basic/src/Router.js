import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Contacts from './pages/contacts/Contacts';
import Chats from './pages/chats/Chats';
import Settings from './pages/settings/Settings';
import EditProfile from './pages/settings/EditProfile';
import ChangeTheme from './pages/settings/ChangeTheme';
import UserChat from './pages/userchat/UserChat';
import Login from './pages/login/Login';

import MessageProvider from './providers/MessageProvider';
import UserProvider from './providers/UserProvider';
import ThemeProvider from './providers/ThemeProvider';

import {ThemeContext} from './contexts/theme';

import IconMatCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ContactStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ContactScreen" component={Contacts} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatScreen" component={Chats} />
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfile}
        options={{
          headerStyle: {backgroundColor: theme.headerColor},
          headerTitle: 'Edit Profile',
          headerTitleStyle: {color: theme.color},
          headerTintColor: theme.color,
        }}
      />
      <Stack.Screen
        name="ChangeThemeScreen"
        component={ChangeTheme}
        options={{
          headerStyle: {backgroundColor: theme.headerColor},
          headerTitle: 'Change Theme',
          headerTitleStyle: {color: theme.color},
          headerTintColor: theme.color,
        }}
      />
    </Stack.Navigator>
  );
};

const TabNav = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: theme.headerColor},
        tabBarActiveTintColor: '#1F51FF',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Contacts"
        component={ContactStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconMatCommunity name="contacts-outline" size={25} color={focused ? '#1F51FF' : 'gray'}/>
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconMatCommunity name="chat" size={25} color={focused ? '#1F51FF' : 'gray'}/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconFeather name="settings" size={25} color={focused ? '#1F51FF' : 'gray'}/>
          ),
        }}
      />
      <Tab.Screen
        name="UserChatScreen"
        component={UserChat}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <UserProvider>
          <MessageProvider>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="LoginScreen" component={Login} />
              <Stack.Screen name="TabNavScreens" component={TabNav} />
            </Stack.Navigator>
          </MessageProvider>
        </UserProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
