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
import {ThemeContext} from '../../contexts/theme';

const EditProfile = props => {
  const {user, setUser} = useContext(UserContext);
  const {theme} = useContext(ThemeContext);

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
    props.navigation.navigate('SettingsScreen');
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={styles.title}>Edit Profile</Text>

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

      <TouchableOpacity style={styles.editButton} onPress={submitUser}>
        <Text style={styles.editButtonText}>Edit</Text>
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
  title: {
    color: '#1F51FF',
    fontSize: 32,
    fontWeight: 'bold',
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
  editButton: {
    width: '80%',
    height: '8%',
    backgroundColor: '#1F51FF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  editButtonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default EditProfile;
