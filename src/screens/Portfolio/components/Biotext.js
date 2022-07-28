import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Biotext() {
  const openPokaz = () => {
    console.log('pokazOpened');
  };
  return (
    <View>
      <View>
        <Text style={styles.biotext}>Биография</Text>
      </View>
      <View style={styles.Text0}>
        <View style={styles.Text1}>
          <Text style={styles.Text1text}>
            Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трехлетней
            дочкой.
          </Text>
        </View>
        <View style={styles.Text2}>
          <Text style={styles.Text2text}>
            По образованию маркетолог, много лет работал на крупные компании.
            Теперь решил погрузиться в мир IT.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.pokaz} onPress={openPokaz}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#FB7360',
            lineHeight: 20,
          }}>
          Показать больше{' '}
        </Text>
        <Image style={styles.sing} source={require('../assets/Icon.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  biotext: {
    fontWeight: 'bold',
    marginTop: 24,
    fontSize: 15,
    alignItems: 'align-self',
  },
  Text1text: {
    marginTop: 20,
    fontSize: 18,
    marginLeft: 10,
    color: '#A3A3A3',
  },
  Text2text: {
    marginTop: 15,
    fontSize: 18,
    marginLeft: 10,
    color: '#A3A3A3',
  },
  pokaz: {
    width: '100%',
    marginTop: 24,
    borderColor: '#FB7360',
    borderWidth: 1.5,
    borderRadius: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  sing: {
    width: 12,
    height: 8,
    marginTop: 6,
    marginLeft: 6,
  },
});
