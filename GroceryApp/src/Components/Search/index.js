import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../StyleGuide';

const Search = () => {
    const [filterData, setFilterData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    useEffect(() => {
        fetchPost()
        return () => {

        }
    }, [])

    const fetchPost = () => {
        const apiUrl = "https://jsonplaceholder.typicode.com/posts"
        fetch(apiUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                setFilterData(responseJson);
                setMasterData(responseJson);
            }).catch((error) => {
                console.error(error);
            })
    }

    function ItemView({ item }) {
        return (
            <Text style={styles.itemStyle}>
                {item.id}{". "}{item.title.toUpperCase()}
            </Text>
        )
    }

    function ItemSeparatorView() {
        return (
            <View style={{ height: 0.5, width: "100%", backgroundColor: colors.Grey_2, }} />
        )
    }

    return (
        <View style={{ flex: 1, }}>
            <View style={styles.container}>
                <FlatList
                    data={filterData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
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
    }
})