import styled from 'styled-components/native';

import { heightPercentageToDP, widthPercentageToDP } from '../../utils/metrics';

export const Container = styled.View`
  padding: ${widthPercentageToDP(0.8)+'px'};
  padding-bottom: ${heightPercentageToDP(1)+'px'};
  height: ${heightPercentageToDP(25)};
  width: ${widthPercentageToDP(31)};
  margin: 0;
`;

export const Main = styled.TouchableWithoutFeedback``;

export const Poster = styled.ImageBackground`
  height: 95%;
  width: 100%;
  margin: 0;
`;

export const PosterName = styled.Text`
  font-size: ${widthPercentageToDP(2.8)};
  color: #f8f8f8;

  text-align: center;
`;