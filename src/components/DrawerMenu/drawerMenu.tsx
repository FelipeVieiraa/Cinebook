import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, NativeModules, ViewStyle, StatusBar } from 'react-native';

const { StatusBarManager } = NativeModules;
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/metrics';

import { Title } from './styles';

const Container: ViewStyle = {
  position: "absolute",
  bottom: 0,
  top: 0,
  left: 0,
  marginTop: StatusBar.currentHeight ?? StatusBarManager?.HEIGHT,
  width: widthPercentageToDP("58%"),
  backgroundColor: "#232323",
  elevation: 4,
  zIndex: 1,
  alignItems: "center"
}

const Content: ViewStyle = {
  position: "relative",
  top: 0,
  width: "90%",
  paddingTop: heightPercentageToDP("1%")
}

interface ComponentProps {
  show: boolean
}

function DrawerMenu({ show }: ComponentProps) {
  const { width } = Dimensions.get('window');

  const [state] = useState({
    container: new Animated.Value(width),
    menu: new Animated.Value(width)
  });

  useEffect(() => {
    if(show){
        openMenu();
    }else{
        closeMenu();
    }
  }, [show]);

  const openMenu = () => {
    Animated.sequence([
      Animated.timing(
        state.container,
        {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        }
      ),
      Animated.spring(state.menu, { toValue: 0, bounciness: 0, useNativeDriver: true })
    ]).start();
  }

  const closeMenu = () => {
    Animated.sequence([
      Animated.timing(state.menu, { toValue: -width, duration: 200, useNativeDriver: true }),
      Animated.timing(state.container, { toValue: -width, duration: 400, useNativeDriver: false })
    ]).start();
  }

  return(
    <Animated.View 
      style={[
        Container,
        {transform: [{ translateX: state.container }]}
      ]}
    >
      <Animated.View
        style={[
          Content,
          {transform: [{ translateX: state.menu }]}
        ]}
      >
        <Title>
          Configurações
        </Title>

      </Animated.View>
    </Animated.View>
  );
}

export default DrawerMenu;