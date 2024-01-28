import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function SigninScreen() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Sign in</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
