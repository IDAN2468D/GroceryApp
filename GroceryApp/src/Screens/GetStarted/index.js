import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { IL_GetStarted_PNG } from '../../StyleGuide/images';
import { colors, fonts, sizes } from '../../StyleGuide';
import { Buttons } from '../../Components';
import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get('window');

const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 0.5, 0.6]} colors={[colors.grey, '#3b5998', '#192f6a']} style={{ width: width, height: height, position: "absolute", }} />
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
        color: colors.white,
        textAlign: "center",
        fontFamily: fonts.SemiBold,
    }
})