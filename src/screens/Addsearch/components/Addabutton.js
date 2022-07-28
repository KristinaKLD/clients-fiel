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

export default function Addabutton({ text, onPress }) {
  const openAddabutton = () => {
    console.log('openAddabutton');
    onPress();
  };
  return (
    <TouchableOpacity style={styles.addabutton} onPress={openAddabutton}>
      <Text style={styles.addabuttonText}>Добавить</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addabutton: {
    backgroundColor: '#FB7360',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  addabuttonText: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
  },
});
