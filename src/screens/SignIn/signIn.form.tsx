import React from 'react';
import { Formik } from 'formik';

import { SignInButton, SignInButtonText } from './styles';
import validations from './signIn.validation';
import TextInput from '../../components/Inputs/TextInput/textInput';
import Spinner from '../../components/Spinner/spinner';

export type SessionValues = {
  email: string;
  password: string;
}

interface FormProps {
  onSubmit: (values: SessionValues, {setSubmitting}: any) => void;
  values: SessionValues;
}

function SignInForm({ onSubmit, values }: FormProps) {
  return(
    <Formik validationSchema={validations} onSubmit={onSubmit} initialValues={values}>
      {
        ({handleChange, handleBlur, handleSubmit, isValid, isSubmitting, errors, touched}) => (
          <>
            <TextInput
              placeholder="E-mail"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              caption={errors.email && touched.email ? errors.email : ''}
              autoCapitalize="none"
              autoFocus
            />
            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              caption={errors.password && touched.password ? errors.password : ''}
              autoCapitalize="none"
              secureTextEntry
            />

            <SignInButton
              disabled={!isValid}
              onPress={() => handleSubmit()}
            >
              <SignInButtonText>
                { isSubmitting ? <Spinner/> : 'Entrar'}
              </SignInButtonText>
            </SignInButton>
          </>
        )
      }

    </Formik>
    );
}

export default SignInForm;