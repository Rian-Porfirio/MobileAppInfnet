import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import * as Animatable from "react-native-animatable";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type RootParamsList = {
    default: undefined;
    login: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootParamsList>;

export default function Default(){

    const navigation = useNavigation<NavigationProp>();

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require("../../../assets/images/Infnet-Logo.png")}
                    style={{width: "56%"}}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View
                animation="fadeInUp"
                delay={600}
                style={styles.containerForm}
            >
                <Text style={styles.title}>Aplicativo Mobile Instituto Infnet</Text>
                <Text style={styles.text}>Faça o login para continuar!</Text>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("login")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#003f7a",
        flex: 1,
    },
    containerLogo: {
        flex: 2,
        backgroundColor: "#003f7a",
        justifyContent: "center",
        alignItems: "center",
    },
    containerForm: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: "5%"
    },
    title: {
        fontSize: 21,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 6,
        color: "#000"
    },
    text: {
        color: "#000"
    },
    button:{
        position: "absolute",
        borderRadius: 50,
        paddingVertical: 8,
        width: "60%",
        alignSelf: "center",
        bottom: "15%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#06488c"
    },
    buttonText:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    }
});
