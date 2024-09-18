import React from 'react';
import { List, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function ItemList({ items = [], handleEditItem, handleDeleteItem }) {
    return (
        <View>
            {items.map(item => (
                <List.Item
                    key={item.id}
                    title={item.name}
                    description={`Quantidade: ${item.quantity}`}
                    right={() => (
                        <View style={styles.actions}>
                            <IconButton
                                icon="pencil"
                                size={20}
                                onPress={() => handleEditItem(item)}
                            />
                            <IconButton
                                icon="delete"
                                size={20}
                                onPress={() => handleDeleteItem(item.id)}
                            />
                        </View>
                    )}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
