import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';

const imageData = [
    { id: '1', uri: require("../assets/images/Infnet-Logo.png") },
    { id: '2', uri: require("../assets/images/Infnet-Logo.png") },
    { id: '3', uri: require("../assets/images/Infnet-Logo.png") },
];

const numColumns = 3;

export default function PhotoGrid() {
    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Card style={styles.card}>
                <Card.Cover source={item.uri} style={styles.image} resizeMode={"contain"}/>
            </Card>
        </View>
    );

    return (
        <FlatList
            data={imageData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
        />
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 3,
        margin: 3,
        height: Dimensions.get('window').width / numColumns,
    },
    card: {
        borderRadius: 3,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
    },
});
