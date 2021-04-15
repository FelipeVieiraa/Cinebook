import React from 'react';
import { ImageBackgroundProps } from 'react-native';

import { Container, Poster, Main, PosterName } from './styles';

interface ComponentProps extends ImageBackgroundProps {}

function CinePoster({source, resizeMode}: ComponentProps) {
  return(
    <Container>
      <Main>
        <>
          <Poster
            source={source}
            resizeMode={resizeMode}
          />
          <PosterName>
            Nome do filme
          </PosterName>
        </>
      </Main>
    </Container>  
  );
}

export default CinePoster;