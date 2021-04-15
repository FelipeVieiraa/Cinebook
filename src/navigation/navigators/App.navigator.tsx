import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home/home';

const StackNavigator = createStackNavigator();

function AppNavigator() {
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