import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DashboardPage = () => {
  return (
    <View style={styles.dashboardcontainer}>
        <Text>Dashb=oardPage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dashboardcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
export default DashboardPage
