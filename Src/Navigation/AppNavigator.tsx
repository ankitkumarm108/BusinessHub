import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './Drawer/Drawer'

const AppStack=createNativeStackNavigator()
const AppNavigator = () => {
  return (
   <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Group>
        <AppStack.Screen name='Drawer' component={Drawer}  />
      </AppStack.Group>
    </AppStack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator