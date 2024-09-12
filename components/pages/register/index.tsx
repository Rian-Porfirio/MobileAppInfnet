
import * as Animatable from "react-native-animatable"
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function Register(){

    const navigator = useNavigation();

    const showModal = ()=>{
        Alert.alert(
             "Cadastro",
             "Cadastro realizado com sucesso",
             [
                 {text: "Entrar", onPress:()=> navigator.goBack()}
            ]
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </View>

            <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite seu e-mail"
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                />

                <Text style={styles.title}>Confirmar Senha</Text>
                <TextInput
                    placeholder="Digite novamente sua senha"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={showModal}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#003f7a",
    },
    containerHeader: {
        marginTop: "14%",
        marginBottom: "8%",
        padding: "5%",
    },
    message: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff"
    },
    link: {
        textDecorationStyle: "dashed",
        color: "#166db7"
    },
    containerForm: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: "5%"
    },
    input: {
        borderBottomWidth: 1,
        borderColor: "#003f7a",
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        borderRadius: 6,
        paddingVertical: 12,
        backgroundColor: "#053566",
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
    },
    textLink: {
        alignSelf: "center",
        marginTop: 24,
    },
    title: {
        fontSize: 18,
    }
});