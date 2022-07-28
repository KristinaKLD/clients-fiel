import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';

export default function ChatCall(props) {
  {
    const openChat = () => {
      const text = 'Hello from my app'
      const phone = '+79216666666'
      Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`)
    };
    const openCall = () => {
      const client = { phone: '+79216666666' };
      Linking.openURL(`tel:${client.phone}`);
    };
    return (
      <View style={styles.ChatCallButton}>
        <TouchableOpacity style={styles.chat} onPress={openChat}>
          <Text style={styles.chatText}>Чат</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.call} onPress={openCall}>
          <Text style={styles.callText}>Звонок</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ChatCallButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chat: {
    borderColor: '#FB7360',
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 48,
    paddingVertical: 12,
    marginTop: 24,
  },
  chatText: {
    borderColor: '#FB7360',
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FB7360',
    lineHeight: 24,
  },
  call: {
    borderColor: '#FB7360',
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 48,
    paddingVertical: 12,
    marginTop: 24,
    backgroundColor: '#FB7360',
  },
  callText: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
  },
});
