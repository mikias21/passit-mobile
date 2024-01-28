import { useCallback } from "react";
import { useFonts } from "expo-font";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

export default function LandingScreen({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("../../assets/images/blurry_background.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.dark_mode_container}>
          <MaterialIcons name="dark-mode" size={24} color="black" />
        </View>
        <View style={styles.container}>
          <View>
            <View style={styles.header_one_container}>
              <Text style={styles.header_one}>Welcome to</Text>
              <Text>
                <Text style={styles.header_one_sub_one}>pass</Text>
                <Text style={styles.header_one_sub_dot}>.</Text>
                <Text style={styles.header_one_sub_two}>it</Text>
              </Text>
            </View>
            <Text style={styles.paragraph_one}>
              Securly store you passwords and access everywhere.
            </Text>
          </View>
          <View style={styles.button_container}>
            <Pressable style={styles.button_one}>
              <Text style={styles.button_one_text}>Start for free</Text>
            </Pressable>
          </View>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.button_two_link}>
              Already have an account ?
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },

  dark_mode_container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 30,
  },

  container: {
    marginTop: 130,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    padding: 30,
  },

  header_one_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  header_one: {
    fontSize: 35,
    fontFamily: "Poppins-Black",
  },

  header_one_sub_one: {
    color: "#3742fa",
    fontSize: 35,
    fontFamily: "Poppins-Black",
  },

  header_one_sub_dot: {
    fontSize: 35,
    fontFamily: "Poppins-Black",
  },

  header_one_sub_two: {
    color: "#3742fa",
    fontSize: 35,
    fontFamily: "Poppins-Black",
  },

  paragraph_one: {
    marginTop: 10,
    fontSize: 17,
    fontFamily: "Poppins-Regular",
  },

  button_container: {
    marginTop: 20,
  },

  button_one: {
    backgroundColor: "#3742fa",
    padding: 10,
    width: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  button_one_text: {
    color: "white",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },

  button_two_link: {
    marginTop: 60,
    fontSize: 14,
    textDecorationLine: "underline",
    fontFamily: "Poppins-Regular",
  },
});
