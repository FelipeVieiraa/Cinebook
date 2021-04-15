import React, { useContext } from 'react';

import { Container, Text, LogOutButton } from './styles';
import { SessionContext } from '../../store/session';

function Home() {

  const { actions, state } = useContext(SessionContext);

  return(
    <Container>
      <Text>Home</Text>
      <LogOutButton onPress={() => actions.expulseCurrentUser()}>
        <Text>SAIR</Text>
      </LogOutButton>
    </Container>
  );
}

export default Home;