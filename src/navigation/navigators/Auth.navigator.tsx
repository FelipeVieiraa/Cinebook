import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../../screens/Intro/intro';
import Session from '../../screens/Session/session';
import SignUp from '../../screens/SignUp/signUp';

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
        name="intro"
        component={Intro}
      />
      <StackNavigator.Screen
        name="session"
        component={Session}
      />
      <StackNavigator.Screen
        name="signUp"
        component={SignUp}
      />
    </StackNavigator.Navigator>
  );
}

export default AuthNavigator;