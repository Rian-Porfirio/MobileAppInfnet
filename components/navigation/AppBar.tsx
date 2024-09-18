import { Appbar } from "react-native-paper"
import {Image, StyleSheet, Text, View} from "react-native";
import Switch from "@/components/ThemeSwitch";
import ThemeSwitch from "@/components/ThemeSwitch";

// @ts-ignore
export default function AppBar(){
    return(
        <Appbar.Header style={styles.header}>
            <Image
                style={styles.image}
                source={require("../../assets/images/Infnet-Logo.png")}
                resizeMode="contain"
            />
            <View>
                <Text>Tema: </Text>
                <ThemeSwitch />
            </View>
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        justifyContent: "space-between",
        height: 45
    },
    title: {
        alignSelf: "center",
        color: "#fff"
    },
    image: {
        width: "15%",
        height: "100%",
        marginBottom: 6
    }
})