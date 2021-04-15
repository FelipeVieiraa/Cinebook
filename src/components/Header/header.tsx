import React from 'react';
import { widthPercentageToDP } from '../../utils/metrics';
import { Icon } from '../Icon/Icon';

import { Container, ToolBoxContent, ToolButton } from './styles';

interface ComponentProps {
  handleSearchInput: () => void;
}
 
function Header({handleSearchInput}: ComponentProps) {
  return(
    <Container>
      <Icon icon="appName" style={{width: widthPercentageToDP(30)}}/>

      <ToolBoxContent>
        <ToolButton>
          <Icon icon="menu" style={{width: widthPercentageToDP(5.5)}}/>
        </ToolButton>
        <ToolButton onPress={() => handleSearchInput()}>
          <Icon icon="search" style={{width: widthPercentageToDP(5.5)}}/>
        </ToolButton>
      </ToolBoxContent>
    </Container>
  );
}

export default Header;