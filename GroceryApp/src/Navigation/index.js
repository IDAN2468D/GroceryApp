import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorite, GetStarted, Home, Notification, Profile } from '../Screens/index';
import { BottomNavigator, CustomDrawer, DetailsScreen, Search } from '../Components';
import MenuScreen from '../Screens/MenuScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import { colors } from '../StyleGuide';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            options={{
                headerShown: false,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: colors.white,
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
            }}
        >
            <Drawer.Screen name="home"
                component={Home}
                options={{
                    headerShown: false,
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name='home-outline'
                            size={22}
                            color={color}
                            style={{
                                alignSelf: "center",
                                position: "absolute",
                                right: 5,
                            }}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name='MenuScreen'
                component={MenuScreen}
                options={{
                    headerShown: false,
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name='person-outline'
                            size={22}
                            color={color}
                            style={{
                                alignSelf: "center",
                                position: "absolute",
                                right: 5,
                            }}
                        />
                    )

                }}
            />
            <Drawer.Screen
                name="Notifications"
                component={SettingsScreen}
                options={{
                    headerShown: false,
                    drawerIcon: ({ color }) => (
                        <Ionicons
                            name='chatbox-ellipses-outline'
                            size={22}
                            color={color}
                            style={{
                                alignSelf: "center",
                                position: "absolute",
                                right: 5,
                            }}
                        />
                    )

                }}
            />
        </Drawer.Navigator>
    );
}

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={MyDrawer} options={{ headerShown: false }} />
            <Tab.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
            <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default Router;