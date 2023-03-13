import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ZamaraInputs from "../common/ZamaraInputs";
import { Formik } from "formik";
import ZamaraTable from "../common/ZamaraTable";

const StaffPage = () => {
  const [loading, setLoading] = useState(false);
  const [isPassword, setIsPassword] = useState(true);
  const [erroredUsername, setErroredUsername] = useState(false);
  const [erroredPassword, setErroredPassword] = useState(false);
  
  return (
    <View style={styles.staffcontainer}>
      <ZamaraTable/>
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
