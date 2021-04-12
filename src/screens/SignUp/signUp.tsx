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
  SignUpButtonText,
  Title
} from './styles';
import { widthPercentageToDP } from '../../utils/metrics';

function SignUp() {
  const navigation = useNavigation();

  return(
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon
            icon="arrowLeft"
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </BackButton>
      </Header>

      <Main>
        <Title>Registrar-se</Title>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <SignUpButton>
          <SignUpButtonText>
            Cadastrar
          </SignUpButtonText>
        </SignUpButton>

        <SignInButton onPress={() => navigation.goBack()}>
          <Icon 
            icon="signIn"
            style={{
              width: widthPercentageToDP(5),
              height: widthPercentageToDP(5),
              marginRight: 5
            }}
          />
          <SignInButtonText>
            Já tenho uma conta.
          </SignInButtonText>
        </SignInButton>

      </Main>

    </Container>
  );
}

export default SignUp;