import React, { useContext } from 'react';

import { Container, Text, LogOutButton, PostersContent } from './styles';
import { SessionContext } from '../../store/session';
import Header from '../../components/Header/header';
import BannerCarousel from '../../components/BannerCarousel/bannerCarousel';
import CinePoster from '../../components/CinePoster/cinePoster';

function Home() {

  const { actions, state } = useContext(SessionContext);

  return(
    <Container>
      <Header />
      <BannerCarousel
        source={require('../../assets/banner-image.png')}
        resizeMode="cover"
      />
      <PostersContent>
        <CinePoster
          source={require('../../assets/banner-image.png')}
          resizeMode="cover"
        />
        <CinePoster
          source={require('../../assets/banner-image.png')}
          resizeMode="cover"
        />
        <CinePoster
          source={require('../../assets/banner-image.png')}
          resizeMode="cover"
        />
        <CinePoster
          source={require('../../assets/banner-image.png')}
          resizeMode="cover"
        />
        <CinePoster
          source={require('../../assets/banner-image.png')}
          resizeMode="cover"
        />
        <CinePoster
          source={require('../../assets/banner-image.png')}
          resizeMode="cover"
        />
      </PostersContent>
      <LogOutButton onPress={() => actions.expulseCurrentUser()}>
        <Text>SAIR</Text>
      </LogOutButton>
    </Container>
  );
}

export default Home;