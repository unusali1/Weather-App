import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const FlatListComponent = () => {
    const userData = [
        {
            id: 1,
            name: 'unus',
            phone: '017176095565',
        },
        {
            id: 2,
            name: 'Adil',
            phone: '017176095565',
        },
        {
            id: 3,
            name: 'adnan',
            phone: '017176095565',
        },

        {
            id: 1,
            name: 'Kabir',
            phone: '017176095565',
        },
    ];
    return (
        <View>
            <Text>Flat List Componeent</Text>
            <FlatList
                data={userData}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text>{item.name}</Text>
                        <Text>{item.phone}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        fontSize: 18,
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
        margin: 10,
    },
});

export default FlatListComponent;
