import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../components/pages/login"
import Default from "../../components/pages/default"
import Register from "../../components/pages/register"

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={"default"}
                component={Default}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={"login"}
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={"register"}
                component={Register}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}
