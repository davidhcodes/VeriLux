import { createStackNavigator, StackView } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./app/HomePage";

const Stack = createStackNavigator();

const HomePageFunction = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="HomePage"
      component={HomePage}
      options={{ title: "" }}
    ></Stack.Screen>
  </Stack.Navigator>;
};

function RootNavigator() {
  // if (loading) {
  // return (
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //     <ActivityIndicator size="large" />
  //   </View>
  // );
  // }

  return (
    <NavigationContainer>
      {/* <HomePageFunction />
       */}
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthenticatedUserProvider>
        <RootNavigator />
      </AuthenticatedUserProvider>
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
