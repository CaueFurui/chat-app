import React, {useState} from 'react';
import { View, TextInput, Image, Button, Platform, KeyboardAvoidingView } from 'react-native'

export default function Join ({joinChat}) {
  const [username, setUsername] = useState('')

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
