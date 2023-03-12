import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const ZamaraInputs = ({disabled, errored, label, error}) => {
   const [active, setActive] = useState(false);
  return (
    <View style={styles.inputcontainer}>
      <Text style={{alignSelf: 'flex-start',marginVertical:5,fontSize:14,color: disabled? '#D0D5DD' : errored? "#F97066" : '#344054'}}>{label}</Text>
      <TextInput style={[styles.input,{borderColor: active? "#795548" : errored? "#F97066" : "#D0D5DD"}]} onFocus={()=>{setActive(true)}} onEndEditing={()=>{setActive(false)}}/>
      <Text style={{alignSelf: 'flex-start',marginVertical:5,fontSize:14,color: disabled? '#D0D5DD' : errored? "#F97066" : '#344054'}}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputcontainer: {
    width: "100%",
    justifyContent:'center', 
    alignItems:'center',
  },
  input: {
    width: "100%",
    height: 54,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ZamaraInputs
