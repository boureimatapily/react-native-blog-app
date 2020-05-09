import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class ArticleDetails extends Component {
  render() {

    const { route } = this.props
    const { shortText, LongText, profileName, profileimage, profilehr, image } = route.params

    return (
      <View style={styles.container}>
        <View style={styles.ImgCont}>
        <View style={styles.ImgBorder}></View>
           <View style={styles.ImageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        </View>
       
       <View style={styles.TextContainer}> 
       <View style={styles.shortTextContainer}>
          <Text style={styles.shortText}>
            {shortText}
          </Text>
        </View>
        <View style={styles.profilContainer}>
          <Image source={profileimage} style={styles.imageProfile} />
          <Text style={styles.profileName}> {profileName} </Text>
          <Text style={styles.profilehr}> {profilehr} </Text>
        </View>
        <View style={styles.longTextContainer}>
          <Text style={styles.longText}>
            {LongText}
          </Text>
        </View>
       </View>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 20,
    backgroundColor:"white"
    
  },
  ImgCont:{
    flexDirection:"row"
  },
  ImgBorder:{
    width:20,
    height:120,
    backgroundColor:"violet",
    marginRight:10
  },
  ImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row"
  },
  image: {
    width: 270,
    height:300,
    marginTop: 10,
  },
  TextContainer:{
    marginHorizontal:25
  },
  shortText: {
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "justify",
    fontSize:18
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10
  },
  profilContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  longText: {
    textAlign: "justify"
  },
  profileName: {
    marginRight: 10
  },
  profilehr:{
    color:"#aaaaaa"
  }

})
