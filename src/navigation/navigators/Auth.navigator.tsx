import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../../screens/Intro/intro';
import SignIn from '../../screens/SignIn/signIn';
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
        name="signIn"
        component={SignIn}
      />
      <StackNavigator.Screen
        name="signUp"
        component={SignUp}
      />
    </StackNavigator.Navigator>
  );
}

export default AuthNavigator;