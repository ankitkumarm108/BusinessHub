import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/QuickHub/Auth/Login';

const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
   <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Group>
        <AuthStack.Screen name="Login" component={Login} />
      </AuthStack.Group>
      </AuthStack.Navigator>
   </NavigationContainer>
  );
};

export default AuthNavigator;
