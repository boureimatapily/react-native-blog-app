import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import ArticleDetails from './src/components/ArticleDetails';
import ArticleListScreen from './src/screens/ArticleListScreen';


const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer >
          <Stack.Navigator initialRouteName="ArticleDetails"
            screenOptions={{ headerTitleAlign:"center"}}>
            <Stack.Screen  name="ArticleDetails" component={ArticleDetails} />
            <Stack.Screen  name="ArticleList" component={ArticleListScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

