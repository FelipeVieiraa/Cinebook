import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FormikHelpers } from 'formik';

import {
  BackButton,
  Container,
  Header,
  Main,
  SignUpButton,
  SignUpButtonText
} from './styles';
import { Icon } from '../../components/Icon/Icon';
import SignInForm, { SessionValues } from './signIn.form';

import { widthPercentageToDP } from '../../utils/metrics';

function SignIn() {
  const navigation = useNavigation();

  const [values] = useState<SessionValues>({
    email: "",
    password: ""
  });

  function onSubmit(values: SessionValues, formikActions: FormikHelpers<SessionValues>) {
    formikActions.setSubmitting(false);
  }

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

        <SignInForm onSubmit={onSubmit} values={values}/>

        <SignUpButton onPress={() => navigation.navigate("signUp")}>
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

export default SignIn;