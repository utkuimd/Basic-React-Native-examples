import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CountryCode from '../../CountryCodes.json';
import {UserContext} from '../../contexts/user';

const Login = props => {
  const {setUser} = useContext(UserContext);
  const [selectedCountryCode, setSelectedCountryCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');

  const submitUser = () => {
    setUser({
      countryCode: selectedCountryCode,
      phoneNumber: phoneNumber,
      name: name,
      surname: surname,
      username: username,
    });
    setName('');
    setSurname('');
    setUsername('');
    setPhoneNumber('');
    setSelectedCountryCode(null);
    props.navigation.navigate('TabNavScreens');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My Telegram Clone App!</Text>

      <View style={styles.getPhoneNumber}>
        <View style={styles.pickerDiv}>
          <Picker
            style={styles.pickerCountryCode}
            selectedValue={selectedCountryCode}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCountryCode(itemValue)
            }>
            {CountryCode.map(code => (
              <Picker.Item
                key={code.code}
                label={code.name}
                value={code.dial_code}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.getInfoPhoneNumber}>
          <View style={styles.getInformationArea}>
            <TextInput
              style={styles.inputText}
              placeholder="Phone number..."
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>
      </View>

      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Name..."
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Surname..."
            value={surname}
            onChangeText={setSurname}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Username..."
            value={username}
            onChangeText={setUsername}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={submitUser}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#1F51FF',
    fontSize: 32,
    fontWeight: 'bold',
    width: '80%',
    marginBottom: 60,
  },
  getPhoneNumber: {
    width: '80%',
    height: '8%',
    flexDirection: 'row',
  },
  pickerDiv: {
    width: '40%',
    height: '100%',
    backgroundColor: '#e9e9e9',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#d3d3d3',
    overflow: 'hidden',
  },
  pickerCountryCode: {
    width: '100%',
    height: '100%',
  },
  getInfoPhoneNumber: {
    width: '60%',
    height: '100%',
    backgroundColor: '#e9e9e9',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getInformation: {
    width: '80%',
    height: '8%',
    backgroundColor: '#e9e9e9',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#d3d3d3',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getInformationArea: {
    width: '95%',
    height: '80%',
    paddingLeft: 10,
  },
  inputText: {
    fontSize: 20,
  },
  loginButton: {
    width: '80%',
    height: '8%',
    backgroundColor: '#1F51FF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  loginText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Login;
