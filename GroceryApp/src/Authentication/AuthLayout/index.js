import React from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors, fonts, } from '../../StyleGuide';
import { Logo } from '../../StyleGuide/images';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const AuthLayout = ({ label, children }) => {
    return (
        <ScrollView>
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    height: windowHeight,
                }}
            >
                <View style={{ alignItems: 'center', }}>
                    <Image source={Logo} resizeMode="cover" style={styles.image} />
                </View>
                <View style={{ marginTop: 20, }}>
                    <Text style={{ textAlign: "center", fontSize: 30, color: colors.black, fontFamily: fonts.Bold }}>
                        {label}
                    </Text>
                </View>
                {children}
            </KeyboardAwareScrollView>
        </ScrollView>
    )
}

export default AuthLayout

const styles = StyleSheet.create({
    image: {
        width: windowWidth,
        height: 250,
    }
})