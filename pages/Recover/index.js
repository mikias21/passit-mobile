import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, TextInput, Pressable } from "react-native";

// Icons
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import styles from "./styles";

const RecoverScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.safe_area}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.navigate("Signin")}>
          <Ionicons name="arrow-back" size={24} color="#ccc" />
        </Pressable>
        <Pressable>
          <MaterialIcons name="dark-mode" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.form_container}>
        <View style={styles.header_container}>
          <Text style={styles.header_one}>Forgot your password</Text>
          <Text style={styles.header_two}>
            Use your email to reset your passit account password.
          </Text>
        </View>
        <View style={styles.recovery_form}>
          <View style={styles.email_form}>
            <Text style={styles.email_label}>Email</Text>
            <View style={styles.email_icon_input_container}>
              <TextInput
                keyboardType="email-address"
                style={styles.email_input}
                placeholder="Enter your email"
              />
              <Ionicons
                name="mail"
                size={24}
                color="#ccc"
                style={styles.email_icon}
              />
            </View>
          </View>
          <View style={styles.button_container}>
            <Pressable style={styles.button_pressable}>
              <Text style={styles.button_text}>Send Email</Text>
            </Pressable>
          </View>
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
            <Text style={styles.footer_link_p}>Already Have an Account?</Text>
            <Text style={styles.footer_link}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default RecoverScreen;
