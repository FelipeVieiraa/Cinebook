import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home/home';

const StackNavigator = createStackNavigator();

function AppNavigator() {

  useEffect(() => {
    StatusBar.setHidden(false);
  }, []);

  return(
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <StackNavigator.Screen
        name="home"
        component={Home}
      />
    </StackNavigator.Navigator>
  );
}

export default AppNavigator;