import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FormikHelpers } from 'formik';

import {
  BackButton,
  Container,
  Header,
  Main,
  SignInButton,
  SignInButtonText,
  Title
} from './styles';
import { Icon } from '../../components/Icon/Icon';
import SignUpForm, { RegisterValues } from './signUp.form';

import { widthPercentageToDP } from '../../utils/metrics';
import { UsersContext } from '../../store/users';
import { Alert } from 'react-native';

function SignUp() {
  const navigation = useNavigation();

  const { state, actions } = useContext(UsersContext);
  const [values] = useState<RegisterValues>({
    name: "",
    email: "",
    password: ""
  });

  function AccountCreatedAlert() {
    return Alert.alert(
      "Conta criada!",
      "Agora você poderá se conectar conosco e ter acesso as melhores recomendações de filmes e séries para assistir.",
      [
        {
          text: "Fazer login",
          onPress: () => navigation.navigate("signIn")
        }
      ]
    );
  }

  function onSubmit(values: RegisterValues, formikActions: FormikHelpers<RegisterValues>) {
    const newUser = {
      id: state.list.length + 1,
      ...values
    }

    actions.addUser(newUser);
    formikActions.setSubmitting(false);
    AccountCreatedAlert();
  }

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

        <SignUpForm onSubmit={onSubmit} values={values} />

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