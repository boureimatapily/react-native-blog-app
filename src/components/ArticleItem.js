import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native'


export default class ArticleItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { image, navigation} = this.props

        return (
            <TouchableOpacity 
            onPress={() => {
               navigation.navigate('ArticleDetails', {
                    shortText: this.props.shortText,
                    image: this.props.image,
                    profileimage: this.props.profileimage,
                    profileName: this.props.profileName,
                    profilehr: this.props.profilehr,
                    LongText: this.props.LongText
                })
            }}

                style={styles.container}>
                <View style={styles.ImageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.shortTextContainer}>
                    <Text style={styles.shortText} numberOfLines={2}>
                        {this.props.shortText}
                    </Text>
                    <View style={styles.profilContainer}>
                        <Image source={this.props.profileimage} style={styles.imageProfile} />
                        <Text style={styles.profileName}> {this.props.profileName} </Text>
                        <Text style={styles.profilehr}> {this.props.profilehr} </Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 15,
        backgroundColor:"white",
        height:120,
        marginHorizontal:15

    },
    ImageContainer: {
        borderTopWidth: 10,
        borderTopColor: "violet",
        borderLeftWidth: 10,
        borderLeftColor: "violet",
        flex: 3,
        height: 70,

    },
    shortTextContainer: {
        flex: 7,
        marginLeft: 30,
        marginTop: 20,
        marginRight:10
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 10,
        marginLeft:10
    },
    shortText: {
        fontWeight: "bold",
        textAlign: "justify",
        width: 200
    },
    imageProfile: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10
    },
    profilContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    profileName: {
        marginRight: 10
    },
    profilehr:{
        color:'#aaaaaa'
    }

})
