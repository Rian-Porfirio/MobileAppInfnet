import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchProfile, handleSave } from '../../../services/firebase/firebaseMethods'; // Ajuste o caminho conforme necessário

export default function EditProfile() {
    const navigation = useNavigation();
    const route = useRoute();

    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        const loadProfile = async () => {
            const profileData = await fetchProfile();
            if (profileData) {
                setName(profileData.nome);
                setOccupation(profileData.ocupacao);
                setPhoto(profileData.foto);
            }
        };

        loadProfile();
    }, []);

    const handleSavePress = async () => {
        const success = await handleSave(name, occupation, photo);
        if (success) {
            Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
            navigation.goBack();
        } else {
            Alert.alert('Erro', 'Não foi possível atualizar o perfil.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Nome"
            />
            <TextInput
                style={styles.input}
                value={occupation}
                onChangeText={setOccupation}
                placeholder="Ocupação"
            />
            <TextInput
                style={styles.input}
                value={photo}
                onChangeText={setPhoto}
                placeholder="URL da Foto"
            />
            <Button title="Salvar" onPress={handleSavePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});
