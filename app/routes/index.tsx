import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../../components/pages/homePage"
import Login from "../../components/pages/login"
import Default from "../../components/pages/default"
import Register from "../../components/pages/register"
import ForgotPassword from "../../components/pages/forgotPassword"
import Profile from "@/components/pages/profile";
import EditProfile from "../../components/pages/editProfile"

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <>
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
            <Stack.Screen
                name={"resetPassword"}
                component={ForgotPassword}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={"homePage"}
                component={HomePage}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={"profile"}
                component={Profile}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={"editProfile"}
                component={EditProfile}
                options={{headerShown: false}}
            />
        </>
    )
}
