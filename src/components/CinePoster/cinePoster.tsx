import React from 'react';
import { ImageBackgroundProps } from 'react-native';

import { Container, Poster, Main, PosterName } from './styles';

interface ComponentProps extends ImageBackgroundProps {
  name: string;
}

function CinePoster({source, resizeMode, name}: ComponentProps) {
  return(
    <Container>
      <Main>
        <>
          <Poster
            source={source}
            resizeMode={resizeMode}
          />
          <PosterName>
            {name}
          </PosterName>
        </>
      </Main>
    </Container>  
  );
}

export default CinePoster;