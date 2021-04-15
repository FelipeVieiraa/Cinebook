import React from 'react';
import { widthPercentageToDP } from '../../utils/metrics';
import { Icon } from '../Icon/Icon';

import { Container, ToolBoxContent, ToolButton, Input } from './styles';

interface ComponentProps {
  onChangeText: (text: string) => void;
}
 
function SearchBar({ onChangeText }: ComponentProps) {
  return(
    <Container>
      <Input
        placeholder="Buscar"
        onChangeText={onChangeText}
        autoFocus
      />
      <ToolBoxContent>
        <ToolButton>
          <Icon icon="search" style={{width: widthPercentageToDP(5.5)}}/>
        </ToolButton>
      </ToolBoxContent>
    </Container>
  );
}

export default SearchBar;