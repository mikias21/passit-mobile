import { useCallback } from "react";
import { useFonts } from "expo-font";
import { Pressable, Text, View, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import styles from "./styles";

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
            <Pressable
              style={styles.button_one}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.button_one_text}>Start for free</Text>
            </Pressable>
          </View>
          <Pressable onPress={() => navigation.navigate("Signin")}>
            <Text style={styles.button_two_link}>
              Already have an account ?
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
