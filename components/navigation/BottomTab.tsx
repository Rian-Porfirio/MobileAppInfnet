import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomePage from "@/components/pages/homePage";
import Profile from "@/components/pages/profile";
import EditProfile from "@/components/pages/editProfile";
import Login from "@/components/pages/login"
import Register from "@/components/pages/register"
import ForgotPassword from "@/components/pages/forgotPassword";
import Default from "@/components/pages/default";

const tabRoutes = [
    {route: "home", label: "Home", component: HomePage,},
    {route: "profile", label: "Profile", component: Profile,},
    {route: "edit", label: "Edit Profile", component: EditProfile,},
    {route: "login", label: "Login", component: Login,},
    {route: "register", label: "Register", component: Register,},
    {route: "resetPassword", label: "forgot password", component: ForgotPassword,},
    {route: "default", label: "Default", component: Default,},
]

const Tab = createBottomTabNavigator();

export default function BottomTab(){
    return(
        <>
            <Tab.Navigator
                initialRouteName={"login"}
                screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 45,
                    position: "absolute",
                    bottom: 0,
                    right: 21,
                    left: 21,
                    borderRadius: 12,
                }
            }}
            >
            {tabRoutes.map((item, index) =>{
                return(
                    <Tab.Screen
                      key={index}
                      name={item.route}
                      component={item.component}
                      options={{
                          tabBarLabel: item.label,
                          headerStatusBarHeight: -18,
                      }}
                    />
                )
            })}
            </Tab.Navigator>
        </>
    );
}
