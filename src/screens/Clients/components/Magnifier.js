import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';

export default function Magnifier({ onChangeSearch }) {
  const [link, onChangeText] = React.useState('');
  console.log('magnifier1');

  
  return (
    <View>
      <Text style={styles.magnifiertext}>Клиенты</Text>
      <View style={styles.input}>
        <Image
          style={styles.magnifier1}
          source={require('../assets/magnifier1.png')}
        />
        <TextInput
          style={styles.input}
          value={link}
          onChangeText={(text) => {
            onChangeText(text);
            onChangeSearch?.(text);
          }}
          placeholder=" Поиск"
          keyboardType="Text"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  magnifiertext: {
    font: 'Poppins',
    marginTop: 15,
    fontSize: 34,
    alignItems: 'align-self',
    fontWeight: 'bold',
  },
  input: {
    margin: 15,
    borderRadius: 14,
    justifyContent: 'center',
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    lineHeight: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    //shadowRadius: 1,
  },
  magnifier1: {
    margin: 12,
    width: 16.8,
    height: 16.8,
  },
});
