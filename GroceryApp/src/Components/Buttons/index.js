import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fonts, sizes } from '../../StyleGuide';

const Buttons = ({ onPress, buttonText, containerStyle, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} style={{ ...containerStyle }} onPress={onPress}>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({
    text: {
        fontSize: sizes.textSizes,
        fontFamily: fonts.Medium,
        color: colors.white,
        textAlign: "center",
        paddingTop: 4,
    }
})