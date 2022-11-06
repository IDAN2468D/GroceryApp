import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HeaderRight = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <AntDesign name='arrowleft' size={35} onPress={() => navigation.goBack()} />
        </View>
    )
}

export default HeaderRight

const styles = StyleSheet.create({ container: {} })