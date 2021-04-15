import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, ViewStyle } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/metrics';

import { Title } from './styles';

const Container: ViewStyle = {
  position: "absolute",
  bottom: 0,
  width: widthPercentageToDP("58%"),
  height: heightPercentageToDP("87.5%"),
  backgroundColor: "#34312E",
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

  const [state, setState] = useState({
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
      Animated.timing(state.container, { toValue: Number(Number(width) - Number(widthPercentageToDP("58%"))), duration: 300, useNativeDriver: false }),
      Animated.spring(state.menu, { toValue: 0, bounciness: 0, useNativeDriver: true })
    ]).start()
  }

  const closeMenu = () => {
    Animated.sequence([
      Animated.timing(state.menu, { toValue: width, duration: 200, useNativeDriver: true }),
      Animated.timing(state.container, { toValue: width, duration: 400, useNativeDriver: false })
    ]).start()
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