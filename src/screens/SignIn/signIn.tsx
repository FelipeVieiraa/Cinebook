import React, { useContext, useState } from 'react';
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
import { UsersContext } from '../../store/users';
import { SessionContext } from '../../store/session';

function SignIn() {
  const navigation = useNavigation();

  const { state } = useContext(UsersContext);
  const { actions } = useContext(SessionContext);

  const [values] = useState<SessionValues>({
    email: "",
    password: ""
  });
  const users = state.list;

  function onSubmit(values: SessionValues, formikActions: FormikHelpers<SessionValues>) {
    const findUser = users.find(user => user.email === values.email && user.password === values.password);
    if(findUser) {
      actions.setCurrentUser(findUser);
    }
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