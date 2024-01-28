import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Signup() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Sign up</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
