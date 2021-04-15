import React, { useContext, useEffect, useState } from 'react';

import { Container, Text, LogOutButton, PostersContent } from './styles';
import { SessionContext } from '../../store/session';
import Header from '../../components/Header/header';
import CinePoster from '../../components/CinePoster/cinePoster';
import { apiFunctions } from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar/searchBar';

function Home() {

  const { actions } = useContext(SessionContext);
  const [showsPosters, setShowsPosters] = useState([]);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    
    async function loadAllShowsPosters() {
      const shows = async () => {
        if(!search) {
          return await apiFunctions.getAllShowsPosters();
        }

        return await apiFunctions.getSearchShows(search);
      }
      setShowsPosters(await shows());
    }
    loadAllShowsPosters();
  }, [search]);

  function renderShow({ item }: any) {
    let show = item;

    if(item.show) {
      show = item.show
    }

    if(show.summary == undefined) return <></>

    return (
      <CinePoster
        source={{uri: show.image?.original}}
        name={show?.name}
        average={show.rating?.average}
        genres={show?.genres}
        summary={show?.summary}
        resizeMode="cover"
      />
    );
  }

  function handleSearchInput() {
    setShowSearchInput(true);
  }

  function onChangeTextSearchInput(text: string) {
    setSearch(text);
  }

  return(
    <Container>
      {showSearchInput 
        ? <SearchBar onChangeText={onChangeTextSearchInput} /> 
        : <Header handleSearchInput={handleSearchInput} />
      }
      <PostersContent>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={showsPosters}
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