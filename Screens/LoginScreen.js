import { View, TextInput, Button, Alert } from "react-native";
import * as React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen({navigation}) {
    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");

    const setLogin = async() => {
        console.log("in async")
        await AsyncStorage.setItem("isLogin", "true");
    }

    const onPressLogin = () => {
        const user = {
            username : id,
            password : password
        }

        const url = "http://192.168.219.104:8080/v1/user/login";
        const opt = {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(user) 
        }

        fetch(url, opt)
        .then(resp => resp.json())
        .then(json => {
            if(json !== null) {
                setLogin();
                saveTokenAtStorage(json.token);
                navigation.goBack();
            }
                

                // setTimeout(async() => {
                //     await AsyncStorage.removeItem("token");
                //     console.log("time out!!!!")
                // }, 30000);
        })
    }

    const saveTokenAtStorage = async(token) => {
        await AsyncStorage.setItem("token", token);
    }

    return (
        <View>
            <TextInput
                placeholder="ID"
                value={id}
                keyboardType={'email-address'}
                onChangeText={setId}
            />

            <TextInput
                placeholder="PASSWORD"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button 
                title="Login"
                onPress={onPressLogin}/>
        </View>
    );
}

export default LoginScreen;