import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors, fonts, sizes } from '../../StyleGuide';
import { slider } from '../../StyleGuide/BigData';

const OnboardingScreens = ({ navigation }) => {

    const [showHomePage, setShowHomePage] = useState(false);

    function NextButton(Next) {
        return (
            <View style={styles.NextButton}>
                <Text style={styles.TextButton}>{Next}</Text>
            </View>
        )
    }

    function DoneButton(Done) {
        return (
            <View style={styles.NextButton}>
                <Text style={styles.TextButton}>{Done}</Text>
            </View>
        )
    }

    function SkipButton(Skip) {
        return (
            <View style={styles.NextButton}>
                <Text style={styles.TextButton}>{Skip}</Text>
            </View>
        )
    }

    if (!showHomePage) {
        return (
            <AppIntroSlider
                data={slider}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Image
                                source={item.image}
                                style={{
                                    width: sizes.windowWidth - 80,
                                    height: 400,
                                }}
                                resizeMode="contain"
                            />
                            <Text style={styles.TitleText}>{item.title}</Text>
                            <Text style={styles.TextDiscription}>{item.discription}</Text>
                        </View>
                    )
                }}
                activeDotStyle={{
                    backgroundColor: colors.StrongViolet,
                    width: 30,
                }}
                showSkipButton
                renderNextButton={() => NextButton("Next")}
                renderSkipButton={() => SkipButton("Skip")}
                renderDoneButton={() => DoneButton("Done")}
                onDone={() => navigation.navigate("GetStarted")}
            />
        )
    }

    return (
        <View>
            <Text>OnboardingScreens</Text>
        </View>
    )
}

export default OnboardingScreens

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        paddingTop: 100,
    },
    TitleText: {
        fontSize: 20,
        color: colors.black,
        fontFamily: fonts.ExtraBold,
    },
    TextDiscription: {
        textAlign: "center",
        padding: 5,
        color: colors.StrongViolet,
        fontFamily: fonts.Medium,
    },
    NextButton: {
        padding: 12,
    },
    TextButton: {
        fontSize: 16,
        color: colors.primary,
        fontFamily: fonts.Bold,
    }
})