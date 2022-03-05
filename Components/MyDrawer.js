import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{ drawerLabel: "Home" }}
            />

            <Drawer.Screen
                name="Login"
                component={LoginScreen}
                options={{ drawerLabel: "Login" }}
            />
        </Drawer.Navigator>
    );
}

export default MyDrawer;