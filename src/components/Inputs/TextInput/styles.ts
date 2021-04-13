import styled from 'styled-components/native';

import { ComponentTextInput } from './textInput';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utils/metrics';

export const Container = styled.View`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput<ComponentTextInput>`
  width: 100%;
  height: ${heightPercentageToDP(7)};
  border-radius: 7px;
  margin-top: 20px;
  padding: 5px 15px 5px 15px;
  font-size: ${widthPercentageToDP(4)};
  background-color: #f8f8f8;
  border-width: ${({ caption }) => caption ? 1.2 : 0};
  border-color: ${({ caption }) => caption ? '#ed4337' : '#000'};
`;

export const Caption = styled.Text`
  width: 100%;
  position: absolute;
  bottom: ${heightPercentageToDP(-2)};
  font-size: ${widthPercentageToDP(3)};
  font-weight: bold;
  color: #ed4337;
`;