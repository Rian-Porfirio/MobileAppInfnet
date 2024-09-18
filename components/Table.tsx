import React, { useState, useEffect } from 'react';
import { View, Alert, Button, StyleSheet } from 'react-native';
import { DataTable, IconButton, TextInput } from 'react-native-paper';
import { addItemToList, editItem, deleteItem, getAllItems } from '@/services/firebase/firebaseMethods';

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
            fetchItems(); // Atualiza a lista após adicionar
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
            fetchItems(); // Atualiza a lista após edição
        }
    };

    const handleDeleteItem = async (itemId) => {
        await deleteItem(itemId);
        fetchItems(); // Atualiza a lista após exclusão
    };

    return (
        <View>
            {/* Formulário para adicionar/editar item */}
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

            {/* Tabela de Itens */}
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>Quantidade</DataTable.Title>
                    <DataTable.Title>Ações</DataTable.Title>
                </DataTable.Header>

                {items.map(item => (
                    <DataTable.Row key={item.id}>
                        <DataTable.Cell>{item.name}</DataTable.Cell>
                        <DataTable.Cell>{item.quantity}</DataTable.Cell>
                        <DataTable.Cell>
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
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        padding: 10,
        marginBottom: 20,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
