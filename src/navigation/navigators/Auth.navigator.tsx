import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Intro from '../../screens/Intro/intro';
import SignIn from '../../screens/SignIn/signIn';
import SignUp from '../../screens/SignUp/signUp';

const StackNavigator = createStackNavigator();

function AuthNavigator() {
  return(
    <StackNavigator.Navigator
      mode="card"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
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