import * as Animatable from "react-native-animatable";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {changePassword} from "@/services/firebase/firebaseMethods";


export default function ForgotPassword(){

    const navigator = useNavigation();

    const [email, setEmail] = useState("");

    const handleUpdatePwd = async ()=>{
        await changePassword(email);
    }

    return(
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInLeft"
                delay={100}
                style={styles.containerHeader}
            >
                <Text style={styles.message}>Redefinir Senha</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={600} style={styles.containerForm}>
                <Text style={styles.title}>Email para recuperação</Text>
                <TextInput
                    placeholder="Digite o email do seu usuário"
                    onChangeText={(value)=> setEmail(value)}
                    style={styles.input}
                    value={email}
                />

                <TouchableOpacity style={styles.button} onPress={handleUpdatePwd}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>

                <Text style={styles.link} onPress={()=> {
                    navigator.navigate("login");
                }}>voltar</Text>

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
        marginTop: 12,
        alignSelf: "center",
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
        borderRadius: 3,
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