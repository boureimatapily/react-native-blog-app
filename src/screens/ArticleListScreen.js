import React, { Component } from 'react'
import { Text, View, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import ArticleItem from '../components/ArticleItem'
import { SafeAreaView } from 'react-native-safe-area-context'

export class ArticleListScreen extends Component {
  List =[
    {
      id:1,
      shortText:"Ad quis aliquip ad magna tempor labore.",
      image:require('../../assets/shoes2.jpg' ), 
      profileimage:require('../../assets/shoes2.jpg'),
      profileName:"Boureima",
       profilehr:"4 min",
      LongText:"Occaecat ea do tempor et cupidatat veniam veniam eu.Quis anim elit eiusmod deserunt sit consequat velit magna esse labore ut. Dolor sit occaecat adipisicing ut nulla quis laborum velit nostrud amet ea laboris.Exercitation magna non cillum minim occaecat occaecat esse cupidatat cillu" ,
    },
    {
      id:2,
      shortText:"Ad quis aliquip ad magna tempor labore.",
      image:require('../../assets/shoes2.jpg' ), 
      profileimage:require('../../assets/shoes2.jpg'),
      profileName:"Boureima1", 
      profilehr:"4 min",
      LongText:"Occaecat ea do tempor et cupidatat veniam veniam eu.Quis anim elit eiusmod deserunt sit consequat velit magna esse labore ut. Dolor sit occaecat adipisicing ut nulla quis laborum velit nostrud amet ea laboris.Exercitation magna non cillum minim occaecat occaecat esse cupidatat cillu" ,
    },
    {
      id:3,
      shortText:"Ad quis aliquip ad magna tempor labore.",
      image:require('../../assets/shoes2.jpg' ), 
      profileimage:require('../../assets/shoes2.jpg'),
      profileName:"Boureima2", 
      profilehr:"4 min",
      LongText:"Occaecat ea do tempor et cupidatat veniam veniam eu.Quis anim elit eiusmod deserunt sit consequat velit magna esse labore ut. Dolor sit occaecat adipisicing ut nulla quis laborum velit nostrud amet ea laboris.Exercitation magna non cillum minim occaecat occaecat esse cupidatat cillu" ,
    },
  ]
  render() {
    const { navigation } = this.props

    return (
      <SafeAreaView style={styles.container}>
          <FlatList 
          contentContainerStyle={{marginTop:10}}
          data={this.List}
          renderItem={({item})=>{
            return  <ArticleItem 
                          shortText={item.shortText}
                          image={item.image}
                          profileimage={item.profileimage}
                          profileName={item.profileName}
                          profilehr={item.profilehr}
                          LongText={item.LongText}
                          navigation={navigation}
                      />  } }
          keyExtractor={item=>{item.id}}
          />
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        
    }
})

export default ArticleListScreen
