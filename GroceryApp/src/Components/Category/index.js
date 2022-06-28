import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = ({ item }) => {
    return (
        <View>
            <Text>{item.name}</Text>
            <Image source={{ uri: item.img }} style={{ width: 100, height: 100, }} />
        </View>
    )
}

export default index

const styles = StyleSheet.create({})