import React, { useState, useEffect } from 'react';
import { View, Alert, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { addItemToList, editItem, deleteItem, getAllItems } from '@/services/firebase/firebaseMethods';
import ItemList from './List';

export default function Table() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', quantity: '' });
    const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const fetchedItems = await getAllItems();
        setItems(fetchedItems);
    };

    const handleAddItem = async () => {
        if (newItem.name && newItem.quantity) {
            await addItemToList(newItem);
            setNewItem({ name: '', quantity: '' });
            fetchItems();
        } else {
            Alert.alert('Erro', 'Preencha todos os campos.');
        }
    };

    const handleEditItem = (item) => {
        setNewItem({ name: item.name, quantity: item.quantity });
        setEditingItem(item);
    };

    const handleSaveEdit = async () => {
        if (editingItem) {
            await editItem(editingItem.id, newItem);
            setEditingItem(null);
            setNewItem({ name: '', quantity: '' });
            fetchItems();
        }
    };

    const handleDeleteItem = async (itemId) => {
        await deleteItem(itemId);
        fetchItems();
    };

    return (
        <View>
            <View style={styles.form}>
                <TextInput
                    label="Nome"
                    value={newItem.name}
                    onChangeText={(text) => setNewItem({ ...newItem, name: text })}
                />
                <TextInput
                    label="Quantidade"
                    value={newItem.quantity}
                    onChangeText={(text) => setNewItem({ ...newItem, quantity: text })}
                />
                <Button
                    title={editingItem ? "Salvar Alterações" : "Adicionar Item"}
                    onPress={editingItem ? handleSaveEdit : handleAddItem}
                />
            </View>

            <ItemList
                items={items}
                handleEditItem={handleEditItem}
                handleDeleteItem={handleDeleteItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        padding: 10,
        marginBottom: 20,
    },
});
