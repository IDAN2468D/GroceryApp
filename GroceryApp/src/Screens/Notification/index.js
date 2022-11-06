import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import { colors } from '../../StyleGuide';

const apiUrl = "https://app-progect-1.herokuapp.com/foods"

const Notification = () => {

    const [todos, setTodos] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [newTodo, setNewTodo] = useState({});


    useEffect(() => {
        GetTodos();
    }, []);

    const GetTodos = () => {
        fetch(apiUrl + '/')
            .then((res) => res.json())
            .then((res) => { setTodos(res) })
            .catch((err) => { console.error("Error: ", err) });
    }


    const addTodo = async () => {
        const Data = await fetch(apiUrl + "/post", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newTodo,
                cal: newTodo,
                //img: newTodo,
                price: newTodo,
            })
        }).then(res => res.json());

        setTodos([...todos, Data]);

        //setPopupActive(false);
        setNewTodo({});
        console.log(Data)
    }


    return (
        <View>
            <FlatList
                data={todos}
                keyboardDismissMode="on-drag"
                renderItem={({ item, index }) => {
                    return (
                        <View item={index}>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }}
            />
            <TextInput
                placeholder='Add Todo'
                onChangeText={text => setNewTodo(text)}
                style={styles.input}
                value={newTodo}
            />
            <Button style={styles.button} title="Learn More" onPress={addTodo} />
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: colors.StrongViolet,
        paddingVertical: 10,
        paddingHorizontal: 10,
    }
})