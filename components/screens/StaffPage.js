import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StaffPage = () => {
  return (
    <View style={styles.staffcontainer}>
      <Text>StaffPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  staffcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
export default StaffPage;
