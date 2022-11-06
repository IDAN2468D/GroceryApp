import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { colors, fonts } from '../../StyleGuide';
import LinearGradient from 'react-native-linear-gradient';
import { G502_3W } from '../../StyleGuide/images';
import { Buttons } from '../../Components';

const { height, width } = Dimensions.get('window');


const MenuScreen = () => {
    return (
        <View style={styles.Container}>
            <LinearGradient start={{ x: 0.50, y: 0.0 }} end={{ x: 1.25, y: 0.65 }} locations={[0.5, 0.5]} colors={[colors.blue, colors.black]} style={{ width: width, height: height, position: "absolute", }} />
            <View style={styles.WerperText}>
                <Text style={styles.Text}>logitech</Text>
                <Image source={G502_3W} style={styles.image} resizeMode="cover" />
                <View style={styles.ContainerText}>
                    <Text style={styles.TextItem}>G502 HERO</Text>
                    <Text style={styles.TextItem}>HIGH PERFORMANCE</Text>
                    <Text style={styles.TextItem_1}>GAMING MOUSE</Text>
                    <Buttons
                        text="Get Started"
                        icon
                        styleContainer={{ marginTop: 30, backgroundColor: colors.blue }}
                    />
                </View>
            </View>
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    image: {
        width: 350,
        height: 350,
    },
    WerperText: {
        flex: 1,
        marginVertical: 50,
        alignItems: 'center',
    },
    Text: {
        color: colors.white,
        fontSize: 40,
        fontFamily: fonts.Bold,
    },
    ContainerText: {
        paddingVertical: 10,
    },
    TextItem: {
        color: colors.white,
        fontSize: 25,
        fontFamily: fonts.Bold,
        textAlign: "center"
    },
    TextItem_1: {
        paddingVertical: 10,
        color: colors.grey,
        fontSize: 18,
        textAlign: "center"
    },
})