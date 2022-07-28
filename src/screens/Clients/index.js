import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Magnifier from './components/Magnifier';
import AddaButton1 from './components/AddaButton1';
import ClientsItem from './components/ClientsItem';

const clients = [
  {
    id: '1',
    name: 'Иван Игнатов',
    city: 'Калининград',
    image: require('./assets/IvanIgnatov.png'),
  },
  {
    id: '2',
    name: 'Олег Иванов',
    city: 'Москва',
    image: require('./assets/OlegIvanov.png'),
  },
  {
    id: '3',
    name: 'Сергей Чернышев',
    city: 'Казань',
    image: require('./assets/SergyChernihcov.png'),
    circle: true,
  },
];

export default function Clients({ navigation, route }) {
  useEffect(() => {
    //console.log('Loaded');

    AsyncStorage.getItem('clients')
      .then((value) => {
        const parsedValue = value != null ? JSON.parse(value) : null;
        //replace clietns with parsedValue
        console.log(value);
        console.log(parsedValue);
      })
      .catch((error) => console.log(error));

    //console.log('loaded 3');
  }, []);

  useEffect(() => {
    if (route?.params?.client) {
      const newClients = [...clients, route.params?.client];
      const jsonValue = JSON.stringify(newClients);
      AsyncStorage.setItem('clients', jsonValue)
        .then(() => console.log('success'))
        .catch(() => console.log('error'));
    }
  }, [route.params]);

  const [filteredClients, setfileredClients] = useState(
    clients,
    filteredClients
  );
  const filterClients = (filter) => {
    console.log('filter', filter);
    const fClients = clients.filter(
      (client) =>
        client.city.toUpperCase().includes(filter.toUpperCase()) ||
        client.name.toUpperCase().includes(filter.toUpperCase())
    );
    console.log('new arrey', fClients);
    setfileredClients([...fClients]);
  };
  return (
    <View style={styles.container}>
      <Magnifier onChangeSearch={filterClients} />
      <ClientsItem
        clients={clients}
        filteredClients={filteredClients}
        onPressClient={(client) => {
          console.log('Clients');
          navigation.navigate('Portfolio', { client });
        }}
      />
      <AddaButton1 onPress={() => navigation.navigate('Addsearch')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 1,
    borderColor: '#FDFDFD',
  },
});
