import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import MenuScreen from './components/common/MenuScreen';
import ContinentsPage from './components/screens/ContinentsPage';
import DashboardPage from './components/screens/DashboardPage';
import LoginPage from './components/screens/LoginPage';
import StaffPage from './components/screens/StaffPage';

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, margin: 20 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
            <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={DashboardPage} options={{headerShown: false}}/>
            {/* <Stack.Screen name="Staff" component={StaffPage} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="Continents" component={ContinentsPage} options={{headerShown: false}}/> */}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS==="android"? StatusBar.currentHeight:10,
  },
});
