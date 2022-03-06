import 'react-native-gesture-handler';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDrawer from './Components/MyDrawer.js';
import HomeScreen from './Screens/HomeScreen.js';
import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const onStateChange = async() => {
    const login = await AsyncStorage.getItem("isLogin");

    if(login !== null)
      setIsLogin(true);
    else
      setIsLogin(false);
  }
  return (
    <NavigationContainer onStateChange={onStateChange}>
      <MyDrawer isLogin={isLogin}/>
    </NavigationContainer>
  );
}