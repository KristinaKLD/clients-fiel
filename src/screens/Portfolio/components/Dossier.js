import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Dossier({ onPress, client }) {
  const openDossier = () => {
    console.log('openDossier');
    onPress();
  };
  return (
    <View>
      <TouchableOpacity
        style={[{ flexDirection: 'row' }, { justifyContent: 'space-between' }]}>
        <TouchableOpacity onPress={openDossier}>
          <Image
            style={styles.dossier}
            source={require('../assets/arrowleft1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.dossier1}
            source={require('../assets/EditSquare.png')}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.Image89}
          source={client.image}       />
      </View>
      <View style={styles.Fio}>
        <Text style={styles.fiotext}>{client.name}</Text>
      </View>
      <View style={styles.Gorod}>
        <Text style={styles.gorodtext}>{client.city}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dossier: {
    marginTop: 15,
    width: 40,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: '#FB7360',
    //alignItems: 'align-self',
  },
  dossier1: {
    marginTop: 15,
    width: 40,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: '#FB7360',
    //alignItems: 'align-self',
  },
  Image89: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginTop: 30,
    alignItems: 'center',
  },
  fiotext: {
    marginTop: 15,
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  gorodtext: {
    marginTop: 10,
    fontSize: 14,
    alignSelf: 'center',
    marginLeft: 10,
    color: '#A3A3A3',
  },
});
