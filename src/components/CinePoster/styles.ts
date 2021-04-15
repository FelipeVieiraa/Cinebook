import styled from 'styled-components/native';

import { heightPercentageToDP, widthPercentageToDP } from '../../utils/metrics';

export const Container = styled.View`
  padding-top: ${heightPercentageToDP(0.5)+'px'};
  padding-bottom: ${heightPercentageToDP(0.5)+'px'};
  width: 100%;
  margin: 0;
`;

export const Main = styled.TouchableOpacity`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

export const Poster = styled.ImageBackground`
  height: ${heightPercentageToDP(25)};
  width: ${widthPercentageToDP(31)};
`;

export const Info = styled.View`
  padding-left: 18px;
  padding-right: 4px;
  flex: 1;
`;

export const PosterName = styled.Text`
  font-size: ${widthPercentageToDP(4)};
  color: #f8f8f8;
  padding-top: 5px;
`;

export const Average = styled.Text`
  font-size: ${widthPercentageToDP(4)};
  color: #f8f8f8;
  padding-top: 5px;
`;

export const Genres = styled.Text`
  font-size: ${widthPercentageToDP(4)};
  color: #f8f8f8;
  padding-top: 5px;
`;

export const Summary = styled.Text`
  font-size: ${widthPercentageToDP(4)};
  color: #f8f8f8;
  padding-top: 5px;
`;