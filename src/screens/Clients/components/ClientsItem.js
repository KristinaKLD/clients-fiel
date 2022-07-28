import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

function ClientItem({ client, onPress }) {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Image style={styles.image} source={client.image} />
      <View style={client.circle ? styles.circle : {}} />
      {client.circle && <View style={styles.circle} />}
      <View style={styles.box}>
        <Text style={styles.name}>{client.name}</Text>
        <Text style={styles.city}>{client.city}</Text>
      </View>
      <View style={styles.arrow}>
        <Image style={styles.arrow} source={require('../assets/arrow1.png')} />
      </View>
    </TouchableOpacity>
  );
}

export default function ClientsItem({
  clients,
  filteredClients,
  onPressClient,
}) {
  const renderItem = ({ item }) => (
    <ClientItem client={item} onPress={() => onPressClient(item)} />
  );
  console.log('clients');
  return (
    <FlatList
      data={(clients, filteredClients)}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 14,
    marginTop: 12,
    paddingVertical: 6,
    marginLeft: 6,
    marginRight: 6,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 14,
  },
  image: {
    width: 44,
    height: 44,
    marginVertical: 10,
  },
  box: {
    marginLeft: 12,
    height: 70,
    marginVertical: 8,
  },
  name: {
    height: 24,
    fontWeight: '600',
    fontSize: 16,
    //marginLeft: 1,
  },
  city: {
    fontSize: 14,
    color: '#A3A3A3',
  },
  arrow: {
    width: 8,
    height: 14,
    marginLeft: 'auto',
    marginRight: 24,
    marginVertical: 16,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'green',
    position: 'absolute',
    top: 50,
    right: 260,
    zIndex: 10,
  },
});
