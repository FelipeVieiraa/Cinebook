import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../../screens/Home/home';
import Perfil from '../../screens/Perfil/perfil';
import { heightPercentageToDP } from '../../utils/metrics';
import { Icon } from '../../components/Icon/Icon';

const BottomTabNavigator = createMaterialBottomTabNavigator();

function TabNavigator() {

  useEffect(() => {
    StatusBar.setHidden(false);
  }, []);

  return(
    <BottomTabNavigator.Navigator
      initialRouteName="home"
      activeColor="#01B7D7"
      inactiveColor="#f8f8f8"
      barStyle={{
        backgroundColor: '#694fad',
        paddingVertical: heightPercentageToDP(0.6)
      }}
    >
      <BottomTabNavigator.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon 
              icon={focused ? "blueHome" : "home"}
              style={{
                width: heightPercentageToDP(3),
                height: heightPercentageToDP(3)
              }}
            />
          )
        }}
        name="home"
        component={Home}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({focused}) => (
            <Icon 
              icon={focused ? "blueUser" : "user"}
              style={{
                width: heightPercentageToDP(3),
                height: heightPercentageToDP(3)
              }}
            />
          )
        }}
        name="perfil"
        component={Perfil}
      />
    </BottomTabNavigator.Navigator>
  );
}

export default TabNavigator;