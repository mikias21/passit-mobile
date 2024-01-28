import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, TextInput, Pressable } from "react-native";

const ActivateScreen = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>This is activate account page</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default ActivateScreen;
