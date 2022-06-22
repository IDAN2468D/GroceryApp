import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Foods = ({ item }) => {
    return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.cal}</Text>
            <Image source={{ uri: item.img }} resizeMode="contain" style={styles.image} />
        </View>
    )
}

export default Foods

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    }
})