import styled from 'styled-components/native';

import { widthPercentageToDP } from '../../utils/metrics';

export const Container = styled.View`
  flex: 1;
  padding: ${widthPercentageToDP(3)+'px'};
  padding-top: ${widthPercentageToDP(20)+'px'};
  background-color: #191919;
`;

export const Text = styled.Text`
  font-size: ${widthPercentageToDP(3.4)};
  font-weight: bold;
  color: #f8f8f8;
`;

export const LogOutButton = styled.TouchableOpacity`
  margin-top: 40px;

  display: flex;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #7314;
  padding: 18px;
`;

export const PostersContent = styled.View`
  flex: 1;
  margin-top: ${widthPercentageToDP(1)+'px'};

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
