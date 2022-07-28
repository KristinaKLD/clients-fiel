import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AddaButton1({ onPress }) {
  const openAddaButton1 = () => {
    console.log('openAddaButton1');
    onPress(openAddaButton1);
  };

  return (
    <TouchableOpacity style={styles.addabutton1} onPress={openAddaButton1}>
      <Text style={styles.addabutton1Text}>Добавить нового</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addabutton1: {
    marginTop: 150,
    backgroundColor: '#FB7360',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  addabutton1Text: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
    lineHeight: 20,
  },
});
