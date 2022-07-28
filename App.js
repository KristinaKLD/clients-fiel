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

import Clients from './src/screens/Clients';
import Addsearch from './src/screens/Addsearch';
import Portfolio from './src/screens/Portfolio';

const Stack = createStackNavigator();

function MeinStack() {
  return (
    <Stack.Navigator
      initialRouteName="Clients"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Clients" component={Clients} />
      <Stack.Screen name="Addsearch" component={Addsearch} />
      <Stack.Screen name="Portfolio" component={Portfolio} />
    </Stack.Navigator>
  );
}

export default function App(navigation) {
  return (
    <NavigationContainer>
      <MeinStack />
    </NavigationContainer>
  );
}
