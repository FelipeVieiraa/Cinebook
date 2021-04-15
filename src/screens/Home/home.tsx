import React, { useContext, useEffect, useState } from 'react';

import { Container, Text, LogOutButton, PostersContent } from './styles';
import { SessionContext } from '../../store/session';
import Header from '../../components/Header/header';
import BannerCarousel from '../../components/BannerCarousel/bannerCarousel';
import CinePoster from '../../components/CinePoster/cinePoster';
import { apiFunctions } from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import { widthPercentageToDP } from '../../utils/metrics';

function Home() {

  const { actions } = useContext(SessionContext);
  const [allShowsPosters, setAllShowsPosters] = useState([]);

  useEffect(() => {
    async function loadAllShowsPosters() {
      const shows = await apiFunctions.getAllShowsPosters();
      setAllShowsPosters(shows);
    }
    loadAllShowsPosters();
  }, []);

  function renderShow({ item }: any) {
    return (
      <CinePoster
        source={{uri: item.image.original}}
        name={item.name}
        average={item.rating.average}
        genres={item.genres}
        summary={item.summary}
        resizeMode="cover"
      />
    );
  }

  return(
    <Container>
      <Header />
      <PostersContent>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allShowsPosters}
          keyExtractor={(item: any) => item.id}
          renderItem={renderShow}
        />
      </PostersContent>
      <LogOutButton onPress={() => actions.expulseCurrentUser()}>
        <Text>SAIR</Text>
      </LogOutButton>
    </Container>
  );
}

export default Home;