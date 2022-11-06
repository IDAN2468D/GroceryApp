import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, FlatList, } from 'react-native';
import { colors, dataTopProducts, fonts } from '../../StyleGuide';
import { Header, Categores, Foods } from '../../Components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-virtualized-view';


const Home = ({ navigation }) => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetchPost()
        return () => {
        }
    }, [])

    const fetchPost = () => {
        const apiUrl = "https://app-progect-1.herokuapp.com/foods"
        fetch(apiUrl)
            .then((response) => response.json())
            .then((response) => { setFoods(response); })
            .catch((error) => { console.error(error); })
    }

    return (
        <View style={styles.container}>
            <Header drawer />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Search */}
                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate("Search")}>
                        <View style={styles.wrapperSearch}>
                            <Ionicons name="search" size={25} />
                            <Text style={styles.textInputSearch}>What would you like to look for ...</Text>
                        </View>
                    </TouchableNativeFeedback>
                    {/* categories  */}
                    <View style={{ flex: 1 }}>
                        <Text style={styles.titleCategories}>Categoris</Text>
                        <FlatList
                            horizontal
                            data={dataTopProducts}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            keyboardDismissMode="on-drag"
                            renderItem={({ item, index }) => {
                                return (
                                    <View item={index}>
                                        <Categores
                                            item={item}
                                            bgColor={item.bgColor}
                                            icon={item.icon}
                                        />
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.titleCategories}>Foods</Text>
                        <FlatList
                            data={foods}
                            numColumns={2}
                            keyExtractor={item => item._id}
                            showsHorizontalScrollIndicator={false}
                            keyboardDismissMode="on-drag"
                            renderItem={({ item, index }) => {
                                return (
                                    <View item={index}>
                                        <Foods
                                            item={item}
                                            onPress={() => navigation.navigate("DetailsScreen", { itemId: item })} />
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: { flex: 1, },
    wrapperSearch: {
        height: 50,
        backgroundColor: colors.lightGrey_2,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    textInputSearch: {
        fontSize: 14,
        fontFamily: fonts.SemiBold,
        color: colors.white,
    },
    titleCategories: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
        color: colors.primary,
        padding: 20,
    }
})