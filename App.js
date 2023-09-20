import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from 'react-navigation-stack'; // Add this import

import React from 'react';

import GetScreen from './components/GetScreen';
import PostScreen from './components/PostScreen';
import PutScreen from './components/PutScreen';
import DeleteScreen from './components/DeleteScreen';
// import HomeScreen from './components/HomeScreen';
// import AboutScreen from './components/AboutScreen';

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator(); // Create a stack navigator

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="GET" component={GetScreen} />
        <Tab.Screen name="POST" component={PostScreen} />
        <Tab.Screen name="PUT" component={PutScreen} />
        <Tab.Screen name="DELETE" component={DeleteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
