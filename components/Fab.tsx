import React, {useState} from 'react';
import { FAB } from 'react-native-paper';
import {Button, Modal, View, StyleSheet} from "react-native";

// @ts-ignore
export default function FabButton({ onPress }) {
    const [visible, setVisible] = useState(false);

    const toggleModal = () => {
        setVisible(!visible);
    };

    // @ts-ignore
    return (
        <View style={styles.container}>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={onPress}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Button title="Fechar" onPress={toggleModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    fab: {
        position: 'absolute',
        right: 0,
        bottom: 50,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
});
