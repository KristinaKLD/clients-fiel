import React from 'react';
import { View, Image, Text, Alert, StyleSheet, TextInput } from 'react-native';

export default function InputField({
  onChangeLink,
  link,
  name,
  onChangeName,
  onChangePhoneNumber,
  phoneNumber,
  onChangeCity,
  city,
  onChangeBio,
  bio,
}) {
  return (
    <View>
      <Text style={styles.text}>Фото</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeLink}
        value={link}
        placeholder=" Вставьте ссылку на фото"
        keyboardType="url"
      />
      <View>
        <Text style={styles.text}>ФИО</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder=" Введите фамилию и и имя"
          keyboardType="text"
        />
      </View>
      <View>
        <Text style={styles.text}>Номер телефона</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePhoneNumber}
          value={phoneNumber}
          placeholder=" +7(000) 000 00 00"
          keyboardType="phone-pad"
        />
      </View>
      <View>
        <Text style={styles.text}>Выберете город</Text>
        <TextInput
          style={styles.input}
          onChangeCity={onChangeCity}
          value={city}
          placeholder=" Веберите город"
          keyboardType="text"
        />
      </View>
      <View>
        <Text style={styles.text}>Био</Text>
        <TextInput
          style={[styles.input, styles.inputBio]}
          onChangeBio={onChangeBio}
          value={bio}
          placeholder=" Укажите хобби интересы, образование и стаж работы "
          keyboardType="text"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderRadius: 16,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },

  text: {
    marginTop: 20,
    padding: 10,
    fontWeight: '600',
    marginLeft: 16,
  },
  inputBio: {
    borderRadius: 16,
    padding: 20,
  },
});
