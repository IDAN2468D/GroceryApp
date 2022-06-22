import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Navigation';
import 'react-native-gesture-handler';


const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App

