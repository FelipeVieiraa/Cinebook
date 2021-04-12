import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '../../components/Icon/Icon';
import {
  BackButton,
  Container,
  Header,
  Input,
  Main,
  SignInButton,
  SignInButtonText,
  SignUpButton,
  SignUpButtonText
} from './styles';
import { widthPercentageToDP } from '../../utils/metrics';

function Session() {
  const navigation = useNavigation();

  return(
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon
            icon="close"
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </BackButton>
      </Header>

      <Main>
        <Icon icon="logo"/>
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <SignInButton>
          <SignInButtonText>
            Entrar
          </SignInButtonText>
        </SignInButton>
        <SignUpButton>
          <Icon 
            icon="ticket"
            style={{
              width: widthPercentageToDP(6),
              height: widthPercentageToDP(6),
              marginRight: 5
            }}
          />
          <SignUpButtonText>
            Ainda não têm uma conta?
          </SignUpButtonText>
        </SignUpButton>
      </Main>

    </Container>
  );
}

export default Session;