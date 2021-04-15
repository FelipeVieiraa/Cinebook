import React from 'react';
import { ImageBackgroundProps } from 'react-native';

import { Container, Banner } from './styles';

interface ComponentProps extends ImageBackgroundProps {}

function BannerCarousel({source, resizeMode}: ComponentProps) {
  return(
    <Container>
      <Banner
        source={source}
        resizeMode={resizeMode}
      />
    </Container>  
  );
}

export default BannerCarousel;