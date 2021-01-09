import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Amplify from 'aws-amplify';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import awsmobile from './aws-exports';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FoodScreen from './screens/FoodScreen';
import FoodDescriptionScreen from './screens/FoodDescriptionScreen';


Amplify.configure(awsmobile);


export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Food" component={FoodScreen} options={{headerShown: false}}/>
          <Stack.Screen name="FoodDescription" component={FoodDescriptionScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
