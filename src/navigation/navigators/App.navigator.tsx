import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './Tab.navigator';

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
        name="tab"
        component={TabNavigator}
      />
    </StackNavigator.Navigator>
  );
}

export default AppNavigator;