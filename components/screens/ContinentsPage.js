import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ContinentsPage = () => {
  return (
    <View style={styles.continentscontainer}>
      <Text>ContinentsPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  continentscontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
export default ContinentsPage;
