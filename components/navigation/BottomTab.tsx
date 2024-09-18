import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomePage from "@/components/pages/homePage";
import Profile from "@/components/pages/profile";

const tabRoutes = [
    {route: "home", label: "Home", component: HomePage,},
    {route: "profile", label: "Profile", component: Profile,},
]

const Tab = createBottomTabNavigator();

export default function BottomTab(){
    return(
        <>
            <Tab.Navigator
                screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 45,
                    position: "absolute",
                    bottom: 21,
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
