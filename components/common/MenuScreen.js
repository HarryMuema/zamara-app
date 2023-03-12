import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ContinentsPage from '../screens/ContinentsPage'
import DashboardPage from '../screens/DashboardPage'
import StaffPage from '../screens/StaffPage'

const MenuScreen = () => {
     const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={DashboardPage} />
      <Drawer.Screen name="Staff" component={StaffPage} />
      <Drawer.Screen name="Continents" component={ContinentsPage} />
    </Drawer.Navigator>
  );
}

export default MenuScreen
