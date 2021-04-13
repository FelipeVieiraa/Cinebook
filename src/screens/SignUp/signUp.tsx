import React, { useState } from 'react';
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

function SignUp() {
  const navigation = useNavigation();

  const [values] = useState<RegisterValues>({
    name: "",
    email: "",
    password: ""
  });

  function onSubmit(values: RegisterValues, formikActions: FormikHelpers<RegisterValues>) {
    formikActions.setSubmitting(false);
    console.log(values)
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