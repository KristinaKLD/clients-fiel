import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dossier from './components/Dossier';
import ChatCall from './components/ChatCall';
import Biotext from './components/Biotext';

export default function Portfolio({
  navigation,
  route,

}) {
  const client = route.params?.client;
 
  //const { client } = route.params;
  console.log('portfolio', client);
  return (
    <View style={styles.container}>
      <Dossier onPress={() => navigation.goBack()} client={client} />
      <ChatCall text="чат" text1="звонок" />
      <Biotext />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 8,
    justifyContent: 'center',
  },
});
