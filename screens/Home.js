import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import io from 'socket.io-client'

export default function Home() {
  const [messageToSend, setMessageToSend] = useState("");
  const [recvMessages, setRecvMessages] = useState([]);
  const socket = useRef(null);

  function sendMessage() {
    socket.current.emit("message", messageToSend);
    setMessageToSend("");
  }

  const textOfRecvMessages = recvMessages.map(msg => (
    <Text key={msg}>{msg}</Text>
  ));

  useEffect(() => {
    socket.current = io('http://192.168.0.13:3001');
    socket.current.on("message", message => {
      setRecvMessages(prevState => [...prevState, message]);
    })
  }, [])

  return (
    <View style={styles.container}>
      {textOfRecvMessages}
      <StatusBar style="auto" />
      <TextInput 
        value={messageToSend} 
        onChangeText={(value) => setMessageToSend(value)} 
        placeholder="Enter chat message" 
        onSubmitEditing={sendMessage}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
