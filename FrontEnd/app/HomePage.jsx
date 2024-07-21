import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  const navigation = useNavigation();

  const navigateToQRCodeScanner = () => {
    navigation.navigate("QRCodeScanner");
  };

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={navigateToQRCodeScanner}
        style={styles.QRCodeButton}
        labelStyle={styles.buttonText}
      >
        Verify an item
      </Button>
      <Button
        mode="contained"
        onPress={navigateToQRCodeScanner}
        style={styles.QRCodeButton}
        labelStyle={styles.buttonText}
      >
        Access your wallet
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  QRCodeButton: {
    backgroundColor: "purple",
    marginVertical: 10,
    padding: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
