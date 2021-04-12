import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../../screens/Intro/Intro';

const StackNavigator = createStackNavigator();

function AuthNavigator() {
  return(
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <StackNavigator.Screen
        name="Intro"
        component={Intro}
      />
    </StackNavigator.Navigator>
  );
}

export default AuthNavigator;