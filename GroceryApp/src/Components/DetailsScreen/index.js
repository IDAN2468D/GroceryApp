import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors, fonts, sizes } from '../../StyleGuide';

const widthScreen = Dimensions.get('window').width;

const DetailsScreen = ({ route }) => {

    const { itemId } = route.params;
    const [details, setDetails] = useState(null);

    useEffect(() => {
        setDetails(itemId)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={{ uri: itemId.img }} resizeMode="cover" style={styles.image} />
            <View style={styles.ContainerItem}>
                <Text style={styles.TextItem}>{itemId.name}</Text>
            </View>
            <FlatList
                data={details?.Details}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View item={index}>
                            <Text>{item.home}</Text>
                            <Text>{item.home}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: widthScreen,
        height: 300,
    },
    ContainerItem: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    TextItem: {
        fontSize: sizes.textSizes,
        fontFamily: fonts.ExtraBold,
        color: colors.darkGreen,
    }
})