import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Join from './Join';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Join' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Join' component={Join} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
