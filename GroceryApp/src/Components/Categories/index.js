import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../StyleGuide';

const Categories = ({ item, bgColor }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.wrapperImg(bgColor)}>
                <Image source={item.icon} resizeMode="contain" style={styles.image} />
            </View>
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 17,
    },
    wrapperImg: (bgColor) => ({
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
        borderRadius: 10,
    }),
    image: {
        height: 50,
        width: 50,
    },
    text: {
        marginTop: 10,
        color: colors.darkGreen,
        fontSize: 14,
        fontFamily: fonts.SemiBold,
    }
})