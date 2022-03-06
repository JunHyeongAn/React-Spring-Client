import { createDrawerNavigator, useDrawerStatus } from "@react-navigation/drawer";
import { useNavigationState } from "@react-navigation/native";
import { useEffect } from "react";
import AdminScreen from "../Screens/AdminScreen";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";

const Drawer = createDrawerNavigator();

function MyDrawer({isLogin}) {
    useEffect(() => {
        console.log(isLogin)
    }, [isLogin])
    return (
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{ drawerLabel: "Home" }}
            />
            {isLogin ?
                <Drawer.Screen
                    name="Logout"
                    component={LoginScreen}
                    options={{ drawerLabel: "Logout" }}
                /> :
                <Drawer.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ drawerLabel: "Login" }}
                />
            }
            <Drawer.Screen
                name="Admin"
                component={AdminScreen}
                options={{ drawerLabel: "Admin" }}
            />
        </Drawer.Navigator>
    );
}

export default MyDrawer;