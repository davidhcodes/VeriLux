import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";

export default function ItemPage({ ItemInfo }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching or loading operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button
          mode="contained"
          style={styles.successBox}
          labelStyle={styles.successText}
        >
          Item verified
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  successBox: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  successText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
