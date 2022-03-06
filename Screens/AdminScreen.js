import { View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function AdminScreen() {
    const [token, setToken] = React.useState("");
    const [isAuth, setIsAuth] = React.useState(true);

    const getToken = async () => {
        const val = await AsyncStorage.getItem("token")
        setToken(val);
    }

    useFocusEffect(
        React.useCallback(() => {
            getToken();
        }, [])
    );

    useFocusEffect(
        React.useCallback(() => {
            const opt = {
                headers: {
                    "X-AUTH-TOKEN" : token
                }
            }
            fetch("http://192.168.219.104:8080/test", opt)
            .then(resp => {
                if(resp.status !== 200) {
                    setIsAuth(false);
                    resp.status;
                }
                else {
                    setIsAuth(true);
                    return resp.json();
                }
            })
            .then(json => {
                console.log(json);
            })
        }, [token])
    )

    return(
        <View>
            {isAuth ? <Text>Admin auth</Text> : <Text>No Auth</Text>}
        </View>
    );
}

export default AdminScreen;