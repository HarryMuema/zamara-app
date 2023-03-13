import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import { NavigationActions } from '@react-navigation/native';


const DashboardPage = ({route, navigation}) => {
  const [data,setData] = useState(null)
  const getParams = route.params
  useEffect(() => {
    setData(getParams)
  }, []);
  console.log (getParams)

  return (
    <View style={styles.dashboardcontainer}>
      <Text style={styles.title}>Welcome  </Text>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text> Your profile details is as below </Text>
        <Text style={styles.subtitle}>Age:</Text>
        <Text style={styles.subtitle}>Gender : </Text>
        <Text style={styles.subtitle}>Email : </Text>
        <Text style={styles.subtitle}>Phone:</Text>
        <Text style={styles.subtitle}>Birth Date:</Text>
        <Text style={styles.subtitle}>Blood Group:</Text>
        <Text style={styles.subtitle}>Height:</Text>
        <Text style={styles.subtitle}>Weight:</Text>
        <Text style={styles.subtitle}>Eye color:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
export default DashboardPage
