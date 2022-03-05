import { View, TextInput, Button, Alert } from "react-native";
import * as React from "react";

function LoginScreen() {
    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onPressLogin = () => {
        const user = {
            username : id,
            password : password
        }

        const url = "http://192.168.219.104:8080/v1/user";
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
            console.log(json)
        })
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