import {View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import AvatarComp from "../../Avatar"
import {useNavigation} from "@react-navigation/native";
import PhotoGrid from "@/components/ImageGrid";

export default function Profile(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.profile}>

            </View>
                <View style={styles.profileForm}>

                    <View style={styles.profilePicture}>
                        <AvatarComp source={require("../../../assets/images/perfil.jpg")} size={150}/>
                        <View style={styles.editButton}>
                            <TouchableOpacity>
                                <Image style={styles.editIcon}
                                    source={require("../../../assets/images/edit.png")}

                                    resizeMode={"contain"}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.profileText}>Rian Porfírio</Text>
                        <Text style={styles.profileDescripText}>Software Developer</Text>
                    </View>

                    <View style={styles.separator}/>

                    <View style={styles.profileAchiv}>
                        <View style={styles.achivItem}>
                            <Text style={styles.achivNumber}>122</Text>
                            <Text style={styles.achivLabel}>followers</Text>
                        </View>
                        <View style={styles.achivItem}>
                            <Text style={styles.achivNumber}>67</Text>
                            <Text style={styles.achivLabel}>following</Text>
                        </View>
                        <View style={styles.achivItem}>
                            <Text style={styles.achivNumber}>37K</Text>
                            <Text style={styles.achivLabel}>likes</Text>
                        </View>
                    </View>

                <View style={styles.photoSection}>
                    <Text style={{fontSize: 24, marginLeft: "3%"}}>Photos</Text>
                    <PhotoGrid />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    profile: {
        backgroundColor: "#003f7a",
        flex: 1,
    },
    profileForm: {
        backgroundColor: "#fff",
        flex: 4,
        alignItems: "center",
    },
    profilePicture: {
        alignItems: "center",
        marginTop: -75,
    },
    profileText: {
        fontSize: 18,
        color: "#003f7a",
        marginTop: 10,
    },
    profileDescripText: {
        fontSize: 12,
        color: "#9b9494",
        marginTop: 2,
    },
    profileAchiv: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        marginTop: 20,
    },
    achivItem: {
        alignItems: "center",
        flex: 1
    },
    achivNumber: {
        fontSize: 21,
        color: "#003f7a",
    },
    achivLabel: {
        fontSize: 12,
        color: "black",
    },
    separator: {
        width: "50%",
        backgroundColor: "#003f7a",
        height: 1,
        borderRadius: 6,
        marginTop: 6
    },
    photoSection:{
        width: "100%",
    },
    editButton: {
        position: "absolute",
        top: "60%",
        left: "30%",
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a7d0ff',
        borderRadius: 20,
    },
    editIcon: {
        width: 18,
        height: 18,
    },
});