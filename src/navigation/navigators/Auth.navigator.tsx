import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../../screens/Intro/Intro';
import Session from '../../screens/Session/session';

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
      <StackNavigator.Screen
        name="Session"
        component={Session}
      />
    </StackNavigator.Navigator>
  );
}

export default AuthNavigator;