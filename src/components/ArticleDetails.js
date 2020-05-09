import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class ArticleDetails extends Component {
  render() {

    const { route } = this.props
    const { shortText, LongText, profileName, profileimage, profilehr, image } = route.params

    return (
      <View style={styles.container}>
        <View style={styles.ImageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.shortTextContainer}>
          <Text style={styles.shortText}>
            {shortText}
          </Text>
        </View>
        <View style={styles.profilContainer}>
          <Image source={profileimage} style={styles.imageProfile} />
          <Text style={styles.profileName}> {profileName} </Text>
          <Text> {profilehr} </Text>
        </View>
        <View style={styles.longTextContainer}>
          <Text style={styles.longText}>
            {LongText}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 20
  },
  ImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 10,
    borderLeftColor: "violet",

  },
  image: {
    width: 300,
    marginTop: 10
  },
  shortText: {
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "justify"
  },
  imageProfile: {
    width: 80,
    height: 80,
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

})
