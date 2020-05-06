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
             >

            <Stack.Screen  name="ArticleDetails" component={ArticleDetails} 
                  options={{
                    headerTitleAlign:"center",
                  headerLeft:()=>(<Text>Beauty</Text>),
                  headerRight:()=>(<Text>Beauty</Text>),
                  headerLeftContainerStyle:{marginLeft:20,
                               backgroundColor:"violet",
                               width:160,
                               
                                              },
                  headerRightContainerStyle:{marginRight:20},
                  headerTitle:null,
                  headerStyle:{height:120}
                  }}
            />
            <Stack.Screen  name="ArticleList" component={ArticleListScreen} 
                
            />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

