import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../components/FlatListComponent"
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
    
  )
}

export default HomeNavigation