import { StatusBar, NativeModules } from 'react-native';
import styled from 'styled-components/native';
const { StatusBarManager } = NativeModules;

import { heightPercentageToDP, widthPercentageToDP } from '../../utils/metrics';

export const Container = styled.View`
  margin-top: ${StatusBar.currentHeight ?? StatusBarManager?.HEIGHT};
  height: ${heightPercentageToDP(8.8)};
  width: ${widthPercentageToDP(100)};
  padding-right: ${widthPercentageToDP(7)};
  padding-left: ${widthPercentageToDP(7)};
  background-color: #232323;

  position: absolute;
  align-self: center;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

export const ToolBoxContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ToolButton = styled.TouchableOpacity`
  margin-top: ${heightPercentageToDP(0.8)};
  padding: 10px;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: ${heightPercentageToDP(5.8)};
  border-radius: 7px;
  margin-top: 14px;
  padding: 5px 15px 5px 15px;
  font-size: ${widthPercentageToDP(4)};
  background-color: #f8f8f8;
`;