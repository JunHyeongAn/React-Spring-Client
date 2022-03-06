import AnimatedLottieView from "lottie-react-native";
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from "react-native";
import { useDrawerStatus } from "@react-navigation/drawer";

function HomeScreen() {
  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(token)
    return token;
  }

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("isLogin");
  }

  return (
    <View style={styles.container}>
      <AnimatedLottieView source={require("../assets/82708-welcome.json")} autoPlay loop={false} />
      <Button title="logout" onPress={logout }/>
      <Button title="show token" onPress={getToken}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomeScreen;