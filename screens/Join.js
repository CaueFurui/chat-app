import React, {useState} from 'react';
import { View, TextInput, Image, Button, Platform, KeyboardAvoidingView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Join () {
  const navigation = useNavigation();
  const [username, setUsername] = useState('')

  function joinChat(username) {
    if(!username) {
      return Alert.alert("Type a username")
    }
    socket.current.emit("join", username);
    navigation.navigate('Home');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{ flex: 1 }} resizeMode='contain' source={require('../assets/chat-icon.png')} />
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <TextInput onChangeText={text => setUsername(text)} style={{ fontSize: 30, textAlign: 'center' }} placeholder='Enter username...' />
        <Button title='Join chat' onPress={() => joinChat(username)} />
      </View>
      {Platform.OS === 'ios' && <KeyboardAvoidingView behavior='padding' />}
    </View>
  )
}
