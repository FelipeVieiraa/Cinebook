import styled from 'styled-components/native';

import { heightPercentageToDP, widthPercentageToDP } from '../../utils/metrics';

export const Container = styled.View`
  flex: 1;
  padding: ${widthPercentageToDP(10)+'px'};
  background-color: #191919;
`;

export const Header = styled.View`
  width: 100%;
  height: ${heightPercentageToDP(7)+'px'};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${heightPercentageToDP(2.65)};
  height: ${heightPercentageToDP(2.65)};
`;

export const Main = styled.View`
  padding-left: ${widthPercentageToDP(1)};
  padding-right: ${widthPercentageToDP(1)};

  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${widthPercentageToDP(10)};
  margin-bottom: 25px;
  margin-top: 15px;
  color: #F8F8F8;
`;

export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  height: ${heightPercentageToDP(7)};
  border-radius: 9px;
  margin-top: 28px;
  background-color: #01B7D7;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

export const SignUpButtonText = styled.Text`
  font-size: ${widthPercentageToDP(4)};
  font-weight: bold;
  color: #f8f8f8;
`;

export const SignInButton = styled.TouchableOpacity`
  margin-top: 40px;

  display: flex;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SignInButtonText = styled.Text`
  font-size: ${widthPercentageToDP(3.4)};
  font-weight: bold;
  color: #f8f8f8;
`;


