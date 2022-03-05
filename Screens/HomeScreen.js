import AnimatedLottieView from "lottie-react-native";
import { StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
    return(
        <View style={styles.container}>
            <AnimatedLottieView source={require("../assets/82708-welcome.json")} autoPlay loop={false}/>
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