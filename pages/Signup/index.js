import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function SignupScreen() {
  return (
    <SafeAreaProvider style={styles.main_container}>
      <View>
        <Text>Sign up</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 120,
    padding: 30,
  },
});
