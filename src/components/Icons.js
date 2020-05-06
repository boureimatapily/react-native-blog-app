import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Feather} from '@expo/vector-icons'

export default class Icons extends Component {
  render() {
    return (
      <View style={styles.Icons} >

                        <TouchableOpacity style={styles.iconsItem}>
                        <Feather name="headphones" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconsItem}>
                            <Feather name="heart" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconsItem}>
                             <Feather name="share-2" size={20} />
                        </TouchableOpacity>        
      </View>
    )
  }
}
const styles = StyleSheet.create({
        Icons:{
            flexDirection:"row",
                  },
        iconsItem:{
            marginRight:10
        },
})  


