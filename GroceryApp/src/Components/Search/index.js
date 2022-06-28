import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, fonts } from '../../StyleGuide';
import { Category } from '../index';

const Search = () => {
    const [filterData, setFilterData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetchPost()
        return () => {

        }
    }, [])

    const fetchPost = () => {
        const apiUrl = "https://app-progect-1.herokuapp.com/foods"
        fetch(apiUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                setFilterData(responseJson);
                setMasterData(responseJson);
            }).catch((error) => {
                console.error(error);
            })
    }

    const serchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilterData(newData);
            setSearch(text);
        } else {
            setFilterData(masterData);
            setSearch(text);
        }
    }

    const ItemView = ({ item }) => {
        return (
            <Category
                item={item}
                onPress={() => navigation.navigate("DetailsScreen", { itemId: item })}
            />
        )
    }


    return (
        <View style={{ flex: 1, }}>
            <View style={styles.container}>
                <View style={styles.wrapperSearch}>
                    <Icon color={colors.Search} name="search" size={20} style={{ paddingVertical: 10, paddingHorizontal: 5, }} />
                    <TextInput
                        style={{ ...fonts.body2 }}
                        placeholder="Happy Bones"
                        placeholderTextColor={{ ...colors.StrongViolet }}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => serchFilter(text)}
                    />
                </View>
                <FlatList
                    data={filterData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ItemView}
                />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    itemStyle: {
        padding: 10,
    },
    wrapperSearch: {
        height: 60,
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: colors.lightGrey_2,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: 25,
        paddingVertical: 10,
    },

})