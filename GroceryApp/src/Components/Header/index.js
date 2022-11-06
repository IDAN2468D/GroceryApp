import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Header = ({ drawer, back, cart, onPress }) => {
    const navigation = useNavigation();

    if (drawer) {
        return (
            <View style={styles.wrapperHeader}>
                <TouchableOpacity onPress={() => navigation.navigate("BuyScreen")}>
                    <FontAwesome5 name='shopping-cart' size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <AntDesign name='menu-fold' size={30} />
                </TouchableOpacity>
            </View>
        )
    }

    if (back)
        return (
            <View style={styles.wrapperHeader}>
                <TouchableOpacity onPress={onPress}>
                    <FontAwesome5 name='arrow-right' size={30} />
                </TouchableOpacity>
            </View>
        )
}

export default Header

const styles = StyleSheet.create({
    wrapperHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 20,
    }
})