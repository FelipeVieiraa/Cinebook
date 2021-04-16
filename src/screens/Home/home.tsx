import React, { useEffect, useState } from 'react';

import { Container, PostersContent } from './styles';
import Header from '../../components/Header/header';
import CinePoster from '../../components/CinePoster/cinePoster';
import { apiFunctions } from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar/searchBar';
import DrawerMenu from '../../components/DrawerMenu/drawerMenu';

function Home() {

  const [showsPosters, setShowsPosters] = useState([]);
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [openDrawerMenu, setOpenDrawerMenu] = useState(false);
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
    setOpenSearchInput(!openSearchInput);
  }

  function handleDrawerMenu() {
    setOpenDrawerMenu(!openDrawerMenu);
  }

  function onChangeTextSearchInput(text: string) {
    setSearch(text);
  }

  return(
    <Container>
      <DrawerMenu show={openDrawerMenu}/>
      {openSearchInput 
        ? <SearchBar onChangeText={onChangeTextSearchInput} handleSearchInput={handleSearchInput} /> 
        : <Header handleSearchInput={handleSearchInput} handleDrawerMenu={handleDrawerMenu}/>
      }
      <PostersContent>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={showsPosters}
          keyExtractor={(item: any) => item.id}
          renderItem={renderShow}
        />
      </PostersContent>
    </Container>
  );
}

export default Home;