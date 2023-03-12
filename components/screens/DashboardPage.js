import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DashboardPage = () => {
  return (
    <View style={styles.dashboardcontainer}>
        <Text style={styles.title}>Welcome Firstname Lastname</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dashboardcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:15,
  },
  title:{
    fontSize:25,
    fontWeight: 'bold',

  }
});
export default DashboardPage
