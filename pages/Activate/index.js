import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, TextInput, Pressable } from "react-native";

// Icons
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import styles from "./styles";

const ActivateScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.safe_area}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.navigate("Landing")}>
          <Ionicons name="arrow-back" size={24} color="#ccc" />
        </Pressable>
        <Pressable>
          <MaterialIcons name="dark-mode" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.form_container}>
        <View style={styles.header_container}>
          <Text style={styles.header_one}>Activate your passit account.</Text>
          <Text style={styles.header_two}>
            Fill in the pin code recieved through your email.
          </Text>
        </View>
        <View style={styles.activate_form}>
          <View style={styles.pin_form}>
            <Text style={styles.pin_label}>PIN code</Text>
            <TextInput keyboardType="email-address" style={styles.pin_input} />
          </View>
          <View style={styles.footer_links}>
            <Pressable
              style={styles.footer_link_one}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.footer_link_p}>Create Account?</Text>
              <Text style={styles.footer_link}>Sign up</Text>
            </Pressable>
            <Pressable
              style={styles.footer_link_two}
              onPress={() => navigation.navigate("Signin")}
            >
              <Text style={styles.footer_link_p}>Already have account?</Text>
              <Text style={styles.footer_link}>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default ActivateScreen;
