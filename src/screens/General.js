import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function General() {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const resp = await fetch('https://violent-janie-maicdev-79bb1026.koyeb.app/api/user')
            const dato = await resp.json()
            setData(dato)
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { getData() }, [])

    const clicMe = () => Alert.alert('Message', 'Hola Mundo!');

    return (
        <View style={styles.container}>
            <Button title='Click me' onPress={clicMe} />
            {
                loading ? <ActivityIndicator /> : (
                    <>
                        <Text style={{ marginTop: 15, textAlign:'center'}}>DATA ... </Text>
                        <FlatList
                            data={data}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) =>
                                <Text style={styles.userContainer}>- {item.name}</Text>
                            }
                        />
                    </>
                )
            }
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },

    userContainer: {
        marginTop: 10,
        padding: 16,
        backgroundColor: '#fff',
    }
});
