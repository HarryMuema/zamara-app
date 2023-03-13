import React, { useEffect, useState } from 'react'
import { Text, ToastAndroid, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ContinentsPage from '../screens/ContinentsPage'
import DashboardPage from '../screens/DashboardPage'
import StaffPage from '../screens/StaffPage'

import axios from "axios";

const MenuScreen = ({route, navigation}) => {
  const [result,setResult] = useState(null)
    const Drawer = createDrawerNavigator()
    const { username } = route.params.result;

    
    const getUserData = async () => {
      const url = `https://dummyjson.com/users/search?q=${username}`;

      await axios
        .get(url)
        .then((response) => {
          const result = response.data;
          setResult(result.users);
          navigation.push('Home')
        })
        .catch((error) => {
          ToastAndroid.show('User not found',ToastAndroid.LONG)
        });
      };

        useEffect(() => {
          getUserData()
        }, []);
  return (
    <Drawer.Navigator initialRouteName='Home' initialParams={result}>
      <Drawer.Screen name="Home" component={DashboardPage} initialParams={result}/>
      <Drawer.Screen name="Staff" component={StaffPage} />
      <Drawer.Screen name="Continents" component={ContinentsPage} />
    </Drawer.Navigator>
  );
}

export default MenuScreen
