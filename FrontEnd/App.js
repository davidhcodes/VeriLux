import { createStackNavigator, StackView } from "@react-navigation/stack";
// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./app/HomePage";
import QRCodeScanner from "./app/QRCodeScanner";
import ItemPage from "./app/ItemPage";

const Stack = createStackNavigator();

const HomePageFunction = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="QRCodeScanner"
        component={QRCodeScanner}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="ItemPage"
        component={ItemPage}
        options={{ title: "", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

function RootNavigator() {
  return (
    <NavigationContainer>
      <HomePageFunction />
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
