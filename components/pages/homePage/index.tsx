import {View, Text, Alert} from "react-native";
import Table from "@/components/Table";
import FabButton from "@/components/Fab";

const showModal = ()=>{
    Alert.alert(
        "Cadastro",
        "Cadastro realizado com sucesso",
        [
            {text: "Adicionar", onPress: ()=> alert("registrado")},
            {text: "Cancelar", onPress: ()=> alert("registrado")},
        ]
    );
}

export default function HomePage(){
    return(
        <View>
            <Text>Outros componentes</Text>
            <Table />
            <FabButton onPress={showModal}/>
        </View>
    )
}