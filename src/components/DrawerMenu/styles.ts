import styled from 'styled-components/native';
import { widthPercentageToDP } from '../../utils/metrics';

export const Title = styled.Text`
  font-size: ${widthPercentageToDP(6)};
  color: #f8f8f8;
  text-align: center;
  margin-top: 12px;
`;