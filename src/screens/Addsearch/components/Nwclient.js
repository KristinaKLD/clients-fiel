import React from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Nwclient({onPress}) {

  return (
    <TouchableOpacity style={styles.nwclient} onPress={onPress}>
      <Image
        style={styles.nwclient}
        source={require('../assets/arrowleft1.png')}
      />
      <Text style={styles.textHeader}>Добавить нового</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nwclient: {
    flexDirection: 'row',
    width: 24,
    height: 24,
    border: '#FB7360',
    alignItems: 'center',
  },
  textHeader: {
    fontFamily: 'poppins',
    marginLeft: 42,
    fontWeight: '600',
    fontSize: 16,
  },
});
