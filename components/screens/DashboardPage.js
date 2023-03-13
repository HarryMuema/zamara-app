import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import { NavigationActions } from '@react-navigation/native';

import axios from "axios";

const DashboardPage = ({route, navigation}) => {
  const [result,setResult] = useState({})
  const { username } = route.params.result;

  const getUserData = async () => {
    const url = `https://dummyjson.com/users/search?q=${username}`;

    await axios
      .get(url)
      .then((response) => {
        const result = response.data;
        setResult(result.users[0]);
      })
      .catch((error) => {
        ToastAndroid.show("User not found", ToastAndroid.LONG);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);
  const { firstName, lastName, age, gender, email, phone, birthDate, bloodGroup, height, weight, eyeColor} = result;

  return (
    <View style={styles.dashboardcontainer}>
      <Text style={styles.title}>Welcome {firstName} {lastName} </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text> Your profile details is as below </Text>
        <Text style={styles.subtitle}>Age : {age}</Text>
        <Text style={styles.subtitle}>Gender : {gender}</Text>
        <Text style={styles.subtitle}>Email : {email}</Text>
        <Text style={styles.subtitle}>Phone : {phone}</Text>
        <Text style={styles.subtitle}>Birth Date : {birthDate}</Text>
        <Text style={styles.subtitle}>Blood Group : {bloodGroup}</Text>
        <Text style={styles.subtitle}>Height : {height}</Text>
        <Text style={styles.subtitle}>Weight : {weight}</Text>
        <Text style={styles.subtitle}>Eye color : {eyeColor}</Text>
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
