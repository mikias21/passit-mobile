import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import ResetScreen from "./pages/Reset";
import SignupScreen from "./pages/Signup";
import SigninScreen from "./pages/Signin";
import LandingScreen from "./pages/Landing";
import RecoverScreen from "./pages/Recover";
import ActivateScreen from "./pages/Activate";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Activate"
          component={ActivateScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recover"
          component={RecoverScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reset"
          component={ResetScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
