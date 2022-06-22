import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IL_GetStarted_PNG } from '../../StyleGuide/images';
import { colors, fonts, sizes } from '../../StyleGuide';
import { Buttons } from '../../Components';

const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Image source={IL_GetStarted_PNG} style={styles.image} />
            <View style={styles.wrapperSlogan}>
                <Text style={styles.txtSlogan}>Shop Your Daily</Text>
                <Text style={styles.txtSlogan}>Necessary</Text>
                <Buttons text="GetStarted" onPress={() => navigation.replace("MainApp")} />
            </View>
        </View>
    )
}

export default GetStarted
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    image: {
        height: 225,
        width: "100%",
        resizeMode: "stretch"
    },
    wrapperSlogan: {
        marginTop: 50
    },
    txtSlogan: {
        fontSize: sizes.titleSize,
        color: colors.primary,
        textAlign: "center",
        fontFamily: fonts.SemiBold,
    }
})