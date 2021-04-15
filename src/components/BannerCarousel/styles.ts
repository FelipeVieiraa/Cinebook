import styled from 'styled-components/native';

import { heightPercentageToDP, widthPercentageToDP } from '../../utils/metrics';

export const Container = styled.TouchableWithoutFeedback`
  background-color: #f1f1f1;
`;

export const Banner = styled.ImageBackground`
  height: ${heightPercentageToDP(30)};
  width: 100%;
`;