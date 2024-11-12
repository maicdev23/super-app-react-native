import { StyleSheet, Text, View } from "react-native";

export default function User({
    id, name, age, address
}) {
    return (
        <View style={styles.userContainer}>
            <Text>Name: {name}</Text>
            <Text>Age: {age}</Text>
            <Text>Address: {address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    }
});