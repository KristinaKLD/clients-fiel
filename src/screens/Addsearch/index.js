import * as React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Nwclient from './components/Nwclient';
import Addabutton from './components/Addabutton';
import InputField from './components/InputField';

export default function Addsearch({ navigation }) {
  const [link, onChangeLink] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [phoneNumber, onChangePhoneNumber] = React.useState('');
  const [city, onChangeCity] = React.useState('');
  const [bio, onChangeBio] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Nwclient onPress={(nwclient) => navigation.goBack()} />
      <InputField />
      <Addabutton
        onPress={(clients) => {
          navigation.navigate('Clients');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    justifyContent: 'center',
    marginHorizontal: 24,
    marginVertical: 2,
    borderColor: '#FDFDFD',
  },
});
