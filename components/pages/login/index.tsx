import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as Animatable from "react-native-animatable";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {loginAuth} from "@/services/firebase/firebaseMethods";

export default function Login(){

    const navigator = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async ()=>{
       await loginAuth(email, password)
        navigator.navigate("homePage")
    }

    const handleClean = () =>{
        setPassword("");
        setEmail("");
    }

    return(
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInLeft"
                delay={100}
                style={styles.containerHeader}
            >
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={600} style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite seu e-mail"
                    onChangeText={(value)=> setEmail(value)}
                    style={styles.input}
                    value={email}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    onChangeText={(value)=> setPassword(value)}
                    style={styles.input}
                    value={password}
                />
                <Text style={styles.link} onPress={()=> navigator.navigate("resetPassword")}>Esqueci a senha</Text>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <Text style={styles.textLink}>Não possui uma conta?
                    <Text style={styles.link} onPress={()=> {
                        navigator.navigate("register")
                        handleClean()
                    }}>Registre-se</Text>
                </Text>
            </Animatable.View>
        </View>
    )
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
        alignSelf: "flex-end",
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