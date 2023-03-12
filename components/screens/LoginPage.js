import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import ZamaraInputs from '../common/ZamaraInputs'
import {useNavigation} from '@react-navigation/native'

const LoginPage = ({navigation}) => {
  const [loading, setLoading]=useState(false)
  // const navigation=useNavigation()

  // const onPressLogin = ()=> {}
  return (
    <View style={styles.logincontainer}>
      <Text style={styles.header}>ZAMARA</Text>
      <ZamaraInputs label={"Username"} />
      <ZamaraInputs label={"Password"} />
      <Button title={loading ? "logging in..." : "Login"} color="#795548" onPress={()=>navigation.navigate('Menu')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
  },
  header:{
    fontSize: 34
  }
})

export default LoginPage
