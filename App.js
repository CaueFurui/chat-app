import React from 'react';
import AppContainer from './screens/AppContainer';
import {createStore, applyMiddleware} from 'redux';
import createSocketIOMiddleware from 'redux-socket.io';
import io from 'socket.io-client'
const socket = io('http://192.168.0.13:3001');
const socketIoMiddleware = createSocketIOMiddleware(socket, 'server/')

function reducer(state = {}, action) {
  switch(action.type) {
    case 'message':
      return {...state, message: action.data}
    default:
      return state;
  }
}

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
  console.log("new state", store.getState())
})

store.dispatch({ type: 'server/hello', data: 'Hello' })

export default function App() {
  return (
    <AppContainer/>
  );
}

