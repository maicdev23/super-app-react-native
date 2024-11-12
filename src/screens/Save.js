import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { database } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";

export default function Save() {
    const navigation = useNavigation()

    const [newData, setNewData] = useState({
        name: '',
        age: '',
        address: '',
    })

    const onSend = async () => {
        await addDoc(collection(database, 'usuario'), newData)
        navigation.goBack()
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Save a new data!</Text>
                <TextInput style={styles.inputContainer}
                    placeholder="Enter name..."
                    onChangeText={text => setNewData({ ...newData, name: text })}
                />
                <TextInput style={styles.inputContainer}
                    placeholder="Enter age..."
                    keyboardType="numeric"
                    onChangeText={text => setNewData({ ...newData, age: text })}
                />
                <TextInput style={styles.inputContainer}
                    placeholder="Enter address..."
                    onChangeText={text => setNewData({ ...newData, address: text })}
                />
                <Button
                    title="Save"
                    onPress={onSend}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
    },
    inputContainer: {
        width: "90%",
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
    },
})