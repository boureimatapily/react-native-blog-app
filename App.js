import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import ArticleDetails from './src/components/ArticleDetails';
import ArticleListScreen from './src/screens/ArticleListScreen';
import Icons from './src/components/Icons';
import ArticleItem from './src/components/ArticleItem';


const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer >
          <Stack.Navigator>
          <Stack.Screen  name="ArticleList" component={ArticleListScreen}  />
            <Stack.Screen name="ArticleItem" component={ArticleItem} />
            <Stack.Screen  name="ArticleDetails" component={ArticleDetails} 
                  options={{
                    headerTitleAlign:"center",
                  headerLeft:()=>(<Text style={{fontSize:30}, {fontWeight:"bold"}}>Beauty</Text>),
                  headerRight:()=>(<Icons />),
                  headerLeftContainerStyle:{marginLeft:20,
                               backgroundColor:"violet",
                               width:160,
                               paddingLeft:10
                                 },
                  headerRightContainerStyle:{marginRight:20},
                  headerTitle:null,
                  headerStyle:{height:120}
                  }}
            />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

