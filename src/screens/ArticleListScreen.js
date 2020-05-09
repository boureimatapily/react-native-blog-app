import React, { Component } from 'react'
import { Text, View, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import ArticleItem from '../components/ArticleItem'
import { SafeAreaView } from 'react-native-safe-area-context'

export class ArticleListScreen extends Component {
  List =[
    {
      id:1,
      shortText:"Ad quis aliquip ad magna tempor labore.",
      image:require('../../assets/f1.jpg' ), 
      profileimage:require('../../assets/moi.jpg'),
      profileName:"Boureima",
       profilehr:"* 4 min",
      LongText:"Occaecat ea do tempor et cupidatat veniam veniam eu. Quis anim elit eiusmod deserunt sit consequat velit \n \nmagna esse labore ut.  Dolor sit occaecat adipisicing ut nulla quis laborum velit nostrud amet ea laboris. Exercitation magna non \n \ncillum minim occaecat occaecat esse cupidatat cillu" ,
    },
    {
      id:2,
      shortText:"Ad quis aliquip ad magna tempor labore.",
      image:require('../../assets/f2.jpg' ), 
      profileimage:require('../../assets/moi1.jpg'),
      profileName:"Ibrahim", 
      profilehr:"* 10 min",
      LongText:"Occaecat ea do tempor et cupidatat veniam veniam eu.Quis anim elit  eiusmod deserunt sit consequat velit \n \nmagna esse labore ut. Dolor sit occaecat adipisicing ut nulla quis laborum velit nostrud amet ea laboris.Exercitation magna non \n \ncillum minim occaecat occaecat esse cupidatat cillu" ,
    },
    {
      id:3,
      shortText:"Ad quis aliquip ad magna tempor labore.",
      image:require('../../assets/f3.jpg' ), 
      profileimage:require('../../assets/moi.jpg'),
      profileName:"Boureima", 
      profilehr:"* 20 min",
      LongText:"Occaecat ea do tempor et cupidatat veniam veniam eu.Quis anim elit eiusmod deserunt sit consequat velit \n \nmagna esse labore ut. Dolor sit occaecat adipisicing ut nulla quis laborum  velit nostrud amet ea laboris.Exercitation magna non \n \ncillum minim occaecat occaecat esse cupidatat cillu" ,
    },
    {
      id:4,
      shortText:"Ad quis aliquip ad magna tempor labore.",
      image:require('../../assets/f4.jpg' ), 
      profileimage:require('../../assets/moi1.jpg'),
      profileName:"Ibrahim", 
      profilehr:"* 50 min",
      LongText:"Occaecat ea do tempor et cupidatat veniam veniam eu. Quis anim elit eiusmod deserunt sit consequat velit \n \nmagna esse labore ut. Dolor sit occaecat adipisicing ut nulla quis laborum velit nostrud amet ea laboris.Exercitation magna non \n \ncillum minim occaecat occaecat esse cupidatat cillu" ,
    },
    {
      id:5,
      shortText:"Ad quis aliquip ad magna tempor labore.",
      image:require('../../assets/f5.jpg' ), 
      profileimage:require('../../assets/moi.jpg'),
      profileName:"Boureima", 
      profilehr:"* 12 min",
      LongText:"Occaecat ea do tempor et cupidatat veniam veniam eu.Quis anim elit eiusmod deserunt sit consequat velit \n \nmagna esse labore ut. Dolor sit occaecat adipisicing ut nulla quis laborum velit nostrud amet ea laboris.Exercitation magna non \n \ncillum minim occaecat occaecat esse cupidatat cillu" ,
    },
    {
      id:6,
      shortText:"Ad quis aliquip ad magna tempor labore.",
      image:require('../../assets/f6.jpg' ), 
      profileimage:require('../../assets/moi1.jpg'),
      profileName:"Boureima", 
      profilehr:"* 12 min",
      LongText:"Occaecat ea do tempor et cupidatat veniam veniam eu.Quis anim elit eiusmod deserunt sit consequat velit \n \nmagna esse labore ut. Dolor sit occaecat adipisicing ut nulla quis laborum velit nostrud amet ea laboris.Exercitation magna non \n \ncillum minim occaecat occaecat esse cupidatat cillu" ,
    },
    {
      id:7,
      shortText:"Ad quis aliquip ad magna tempor labore.",
      image:require('../../assets/f2.jpg' ), 
      profileimage:require('../../assets/moi.jpg'),
      profileName:"Boureima", 
      profilehr:"* 12 min",
      LongText:"Occaecat ea do tempor et cupidatat veniam veniam eu.Quis anim elit eiusmod deserunt sit consequat velit \n \nmagna esse labore ut. Dolor sit occaecat adipisicing ut nulla quis laborum velit nostrud amet ea laboris.Exercitation magna non \n \ncillum minim occaecat occaecat esse cupidatat cillu" ,
    },
  ]
  render() {
    const { navigation } = this.props

    return (
      <SafeAreaView style={styles.container}>
          <FlatList 
          
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
        backgroundColor:"#D6D2D2",
        
    }
})

export default ArticleListScreen
