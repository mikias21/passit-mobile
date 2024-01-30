import { useState } from "react";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Pressable,
  Text,
  View,
  ImageBackground,
  Image,
  useColorScheme,
} from "react-native";
import TypeWriter from "react-native-typewriter/components/typewriter";

// Icons
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import styles from "./styles";

export default function LandingScreen({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  // const themeTextStyle =
  //   colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  // const themeContainerStyle =
  //   colorScheme === "light"
  //     ? styles.lightThemeContainer
  //     : styles.darkThemeContainer;

  const themeTextStyle =
    isDarkMode === true ? styles.darkThemeText : styles.lightThemeText;
  const themeContainerStyle =
    isDarkMode === true
      ? styles.darkThemeContainer
      : styles.lightThemeContainer;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ImageBackground
        source={`${
          !isDarkMode
            ? require("../../assets/images/blurry_background.png")
            : require("../../assets/images/blurry_background_dark.png")
        }`}
        style={[styles.backgroundImage, themeContainerStyle]}
      >
        <Pressable style={styles.dark_mode_container} onPress={toggleDarkMode}>
          {isDarkMode ? (
            <Entypo
              name="light-down"
              size={30}
              color="black"
              style={[themeTextStyle]}
            />
          ) : (
            <MaterialIcons
              name="dark-mode"
              size={24}
              color="black"
              style={[themeTextStyle]}
            />
          )}
        </Pressable>
        <View style={[styles.container]}>
          <View>
            <View style={styles.image_container}>
              <Image
                style={styles.image_logo}
                source={`${
                  !isDarkMode
                    ? require("../../assets/images/logo-no-background.png")
                    : require("../../assets/images/logo-white.png")
                }`}
              />
            </View>
            <View style={styles.header_one_container}>
              <Text style={[styles.header_one, themeTextStyle]}>
                Welcome to
              </Text>
              <Text>
                <Text style={styles.header_one_sub_one}>pass</Text>
                <Text style={[styles.header_one_sub_dot, themeTextStyle]}>
                  .
                </Text>
                <Text style={styles.header_one_sub_two}>it</Text>
              </Text>
            </View>
            <TypeWriter typing={1}>
              <Text style={[styles.paragraph_one, themeTextStyle]}>
                Store you passwords in a secure way and access everywhere.
              </Text>
            </TypeWriter>
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
            <Text style={[styles.button_two_link, themeTextStyle]}>
              Already have an account ?
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
