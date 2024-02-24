import React, {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {UserContext} from '../../contexts/user';
import {ThemeContext} from '../../contexts/theme';

const Settings = props => {
  const {theme} = useContext(ThemeContext);
  const {setUser} = useContext(UserContext);

  const gotoEditScreen = () => {
    props.navigation.navigate('EditProfileScreen');
  };
  const gotoChangeThemeScreen = () => {
    props.navigation.navigate('ChangeThemeScreen');
  };
  const eraseUserData = () => {
    setUser(null);
    props.navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Image
        style={styles.myProfilePicture}
        source={{uri: 'https://avatars.githubusercontent.com/u/107312837?v=4'}}
      />
      <UserInfo />
      <TouchableOpacity style={styles.button} onPress={gotoEditScreen}>
        <Text style={styles.button_text}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={gotoChangeThemeScreen}>
        <Text style={styles.button_text}>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={eraseUserData}>
        <Text style={styles.logoutText}>Logout!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const UserInfo = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <UserContext.Consumer>
      {value => (
        <View style={styles.userinfo_container}>
          <View style={styles.userinfo_name_div}>
            <Text style={[styles.userinfo_name_text, {color: theme.color}]}>{value.user.name}</Text>
            <Text style={[styles.userinfo_surname_text, {color: theme.color}]}>{value.user.surname}</Text>
          </View>
          <Text style={[styles.userinfo_username_text, {color: theme.color}]}>{value.user.username}</Text>
          <View style={styles.userinfo_phone_div}>
            <Text style={[styles.userinfo_countrycode_text, {color: theme.color}]}>{value.user.countryCode}</Text>
            <Text style={[styles.userinfo_phonenumber_text, {color: theme.color}]}>{value.user.phoneNumber}</Text>
          </View>
        </View>
      )}
    </UserContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myProfilePicture: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  button: {
    width: '60%',
    height: '8%',
    backgroundColor: '#1F51FF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button_text: {
    fontSize: 20,
    color: 'white',
  },
  logoutButton: {
    width: '60%',
    height: '8%',
    backgroundColor: 'red',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 20,
    color: 'white',
  },
  userinfo_container: {
    width: '50%',
    height: '18%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  userinfo_name_div: {
    flexDirection: 'row',
  },
  userinfo_name_text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  userinfo_surname_text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  userinfo_username_text: {
    fontSize: 20,
  },
  userinfo_phone_div: {
    flexDirection: 'row',
    marginTop: 5,
  },
  userinfo_countrycode_text: {
    fontSize: 20,
  },
  userinfo_phonenumber_text: {
    fontSize: 20,
  },
});

export default Settings;
