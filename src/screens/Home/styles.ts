import styled from 'styled-components/native';

import { widthPercentageToDP } from '../../utils/metrics';

export const Container = styled.View`
  flex: 1;
  padding: ${widthPercentageToDP(3)+'px'};
  padding-top: ${widthPercentageToDP(26)+'px'};
  background-color: #191919;
`;

export const PostersContent = styled.View`
  flex: 1;
  width: 100%;
  margin-top: ${widthPercentageToDP(1)+'px'};
`;
