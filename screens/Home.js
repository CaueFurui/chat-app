import React, { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';
import io from 'socket.io-client'
import { GiftedChat } from 'react-native-gifted-chat'

export default function Home() {
  const [recvMessages, setRecvMessages] = useState([]);
  const socket = useRef(null);

  function onSend(messages) {
    socket.current.emit("message", messages[0].text);
    setRecvMessages(prevState => GiftedChat.append(prevState, messages))
  }

  useEffect(() => {
    socket.current = io('http://192.168.0.13:3001');
    socket.current.on("message", message => {
      setRecvMessages(prevState => GiftedChat.append(prevState, message));
    })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={recvMessages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}
