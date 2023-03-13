import React, { useState } from 'react'
import { Button, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import ZamaraInputs from '../common/ZamaraInputs'
import { Formik } from "formik";

import axios from 'axios'

const LoginPage = ({navigation}) => {
  const [loading, setLoading]=useState(false)
  const [isPassword, setIsPassword] = useState(true);
  const [erroredUsername, setErroredUsername] = useState(false);
  const [erroredPassword, setErroredPassword] = useState(false);
  
  const onPressLogin = async (values, setSubmitting) => {
    const url = 'https://dummyjson.com/auth/login';

    await axios.post(url, values).then((response) => {
      const result = response.data
      ToastAndroid.show("Login Success", ToastAndroid.LONG)
      setSubmitting(false)
      navigation.navigate('Menu',{result})
    }).catch(error => {
      ToastAndroid.show("Invalid Username or Password",ToastAndroid.LONG)
    })
  }
  return (
    <View style={styles.logincontainer}>
      <Text style={styles.header}>ZAMARA</Text>
      <Formik
        initialValues={{username:'', password:'',}}
        validate={values => {
          const err = {}
          if (!values.username){
            err.username = 'Username required'
            setErroredUsername(true)
          }else{
            setErroredUsername(false)
          }
          if (!values.password){
            err.password = 'Password required'
            setErroredPassword(true);
          }else{
            setErroredPassword(false)
          }
          return err
        }}
        onSubmit={(values, {setSubmitting}) =>{
          setTimeout(() =>{
            onPressLogin(values,setSubmitting)
          },400)
        }}
      >
        {({values, errors, handleChange, handleSubmit, isSubmitting}) => (
          <>
            <ZamaraInputs label={"Username"} isPassword={!isPassword} onChangeText={handleChange('username')} value={values.username} errored={erroredUsername} error={errors.username}/>
            <ZamaraInputs label={"Password"} isPassword={isPassword} onChangeText={handleChange('password')} value={values.password} errored={erroredPassword} error={errors.password}/>
            <Button title={loading? "logging in..." : "Login"} color="#795548" onPress={handleSubmit}/>
          </>
        )}
      </Formik>
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
