import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colors, fonts, sizes } from '../../StyleGuide';
import { AvatarMan } from '../../StyleGuide/images';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: colors.StrongViolet }}
            >
                <View style={{ alignItems: 'center', marginTop: 15, }}>
                    <Image
                        source={AvatarMan}
                        resizeMode="contain"
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />

                    <Text style={styles.TextMedium}>John Doe</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: colors.white, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.CustomDrawer}>
                <TouchableOpacity style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Ionicons name='share-social-outline' size={22} />
                        <Text style={styles.Medium}>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Ionicons name='exit-outline' size={22} />
                        <Text style={styles.Medium}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    TextMedium: {
        color: colors.white,
        fontSize: sizes.textSizes,
        fontFamily: fonts.Medium,
        marginBottom: 5,
    },
    TextRegular: {
        color: colors.white,
        fontSize: sizes.textSizes,
        fontFamily: fonts.Regular,
        marginBottom: 5,
    },
    CustomDrawer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: colors.grey_2
    },
    Medium: {
        fontSize: 15,
        fontFamily: fonts.Medium,
        marginLeft: 5,
    }
})