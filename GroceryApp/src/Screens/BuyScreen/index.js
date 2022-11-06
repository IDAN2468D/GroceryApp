import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../Components'

const BuyScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>BuyScreen</Text>
        </View>
    )
}

export default BuyScreen

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: "center", flex: 1, },
    text: { fontSize: 40, }
})