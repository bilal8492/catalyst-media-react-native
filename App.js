import * as React from 'react';
import { DeviceEventEmitter } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen'
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />

    </Stack.Navigator>
  );
}

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


