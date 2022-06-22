import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fonts, sizes } from '../../StyleGuide'

const Buttons = ({ onPress, text }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 60,
        width: 260,
        borderRadius: 20,
        marginTop: 90,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: sizes.textSizes,
        fontFamily: fonts.Medium,
        color: colors.white,
        textAlign: "center",
        paddingTop: 4,
    }
})