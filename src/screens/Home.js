import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { database } from "../config/firebase";
import User from "../components/User";

export default function Home() {
    const navigation = useNavigation()

    const [users, setUsers] = useState([])

    useEffect(() => {
        const collectionRef = collection(database, 'usuario')
        const result = query(collectionRef, orderBy('age', 'desc'))

        return unsubscribe = onSnapshot(result, (snapshot) => {
            setUsers(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                    address: doc.data().address,
                    age: doc.data().age
                }))
            )
        })
    }, [])

    return (
        <>
            <View style={styles.userContainer}>
                <Button
                    title="General"
                    onPress={() => navigation.navigate('General')}
                />
                <Button
                    title="Save"
                    onPress={() => navigation.navigate('Save')}
                />
            </View>
            <ScrollView>
                {
                    users.map(user => (
                        <User key={user.id}
                            name={user.name}
                            address={user.address}
                            age={user.age}
                        />
                    ))
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
    }
});