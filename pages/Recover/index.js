import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, TextInput, Pressable } from "react-native";

const RecoverScreen = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>This is Recover account page</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default RecoverScreen;
