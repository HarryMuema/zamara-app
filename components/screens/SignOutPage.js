import React, { useState } from 'react'
import { Button, View } from 'react-native'

const SignOutPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor:'#fff'}}>
        <Button title={loading? "logging out..." : "Logout"} color="#795548" />
    </View>
  )
}

export default SignOutPage
