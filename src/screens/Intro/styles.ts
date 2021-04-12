import styled from 'styled-components/native';

import { widthPercentageToDP, heightPercentageToDP } from '../../utils/metrics';

export const Container = styled.ImageBackground`
  padding: ${widthPercentageToDP(10)+'px'};
  flex: 1;
`;

export const PageContent = styled.View`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.View`
  width: 100%;
  margin-bottom: ${heightPercentageToDP(3)+'px'};
`;

export const Text = styled.Text`
  font-size: ${widthPercentageToDP(6.6)+'px'};
  font-weight: bold;
  color: #F8F8F8;
  margin-bottom: 22px;
  text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.5);
`;

export const NextButton = styled.TouchableOpacity`
  width: 100%;
  height: ${widthPercentageToDP(26) - heightPercentageToDP(4)+'px'};
  border-radius: 9px;
  background-color: #01B7D7;
  elevation: 4;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: ${widthPercentageToDP(6.5) - heightPercentageToDP(1.1)+'px'};
  font-weight: bold;
  color: #f8f8f8;
`;
