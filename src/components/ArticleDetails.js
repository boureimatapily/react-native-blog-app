import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class ArticleDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.ImageContainer}> 
                      <Image source={require('../../assets/shoes2.jpg')}  style ={styles.image} />
          </View>
          <View style={styles.shortTextContainer}>
            <Text style={styles.shortText}>
                    Officia officia incididunt ea do cupidatat deserunt Lorem id labore ipsum veniam officia.
                    Officia officia incididunt ea do cupidatat deserunt Lorem id labore ipsum veniam officia.

            </Text>
          </View>
          <View style={styles.profilContainer}>
              <Image source={require('../../assets/shoes2.jpg')} style={styles.imageProfile} />
              <Text style={styles.profileName}>Boureima Tapily</Text>
              <Text>4 min</Text>
          </View>
          <View style={styles.longTextContainer}>
            <Text style={styles.longText}>
              Exercitation ipsum excepteur est quis aliquip labore deserunt laboris. 
                Dolor excepteur non irure enim consectetur magna. Cillum deserunt aliquip 
                excepteur laborum excepteur dolor tempor mollit.
                 Sint anim eiusmod quis dolor 
                nisi reprehenderit eiusmod eu.
                Nostrud tempor aliqua amet do reprehenderit dolore sunt officia proident cillum.
                Proident non fugiat fugiat adipisicing cillum enim velit sint. Ut minim do est fugiat.
                Eu mollit magna dolor pariatur tempor labore sint. Ex adipisicing tempor officia commodo 
                  
            </Text>
                
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"center",
        marginHorizontal:20
    },
    ImageContainer:{
        justifyContent:"center",
        alignItems:"center",
        borderLeftWidth:10,
        borderLeftColor:"violet",
        
    },
    image:{ 
       width:300,
      marginTop:10 },
    shortText:{
      fontWeight:"bold",
      marginTop:10,
      textAlign:"justify"
    },
    imageProfile:{
      width:80,
      height:80,
      borderRadius:50,
      marginRight:10
    },
    profilContainer:{
      flexDirection:"row",
      alignItems:"center",
      marginVertical:10
    },
    longText:{
      textAlign:"justify"
    },
    profileName:{
      marginRight:10
    },
    
})
