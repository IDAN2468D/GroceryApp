import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../StyleGuide';

const Icons = ({ label, isFocused, sizes, color }) => {
    switch (label) {
        case 'Home':
            return isFocused ? <Ionicons name="home-sharp" size={sizes} color={color} /> : <Ionicons name="home-outline" size={sizes} color={color} />;
        case 'Favorite':
            return isFocused ? <Ionicons name='md-bookmark' size={sizes} color={color} /> : <Ionicons name='bookmark-outline' size={sizes} color={color} />;
        case 'Notification':
            return isFocused ? <Ionicons name='notifications' size={sizes} color={color} /> : <Ionicons name='md-notifications-outline' size={sizes} color={color} />;
        case 'Profile':
            return isFocused ? <AntDesign name='user' size={sizes} color={color} /> : <AntDesign name='user' size={sizes} color={color} />;
        default:
            return <Ionicons name='home' size={30} />;
    }
};

const BottomNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}>
                        <Icons label={label} isFocused={isFocused} sizes={30} color={isFocused ? '#673ab7' : colors.primary} />
                        {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 32,
        justifyContent: 'space-between',
    },
    fontSizes: {
        fontSize: 30
    }
})