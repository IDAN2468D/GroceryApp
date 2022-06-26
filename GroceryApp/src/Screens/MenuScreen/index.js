import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../StyleGuide'

const MenuScreen = () => {
    return (
        <View style={styles.Container} />
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
    }
})