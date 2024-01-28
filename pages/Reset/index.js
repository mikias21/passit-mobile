import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, TextInput, Pressable } from "react-native";

const ResetScreen = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>This is reset account page</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default ResetScreen;
