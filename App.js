import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen'
const Stack = createStackNavigator();

if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

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


