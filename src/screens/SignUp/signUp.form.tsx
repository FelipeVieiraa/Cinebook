import React from 'react';
import { Formik, FormikHelpers } from 'formik';

import { SignUpButtonText, SignUpButton } from './styles';
import TextInput from '../../components/Inputs/TextInput/textInput';
import Spinner from '../../components/Spinner/spinner';

import validations from './signUp.validation';

export type RegisterValues = {
  name: string;
  email: string;
  password: string;
}

interface FormProps {
  onSubmit: (values: RegisterValues, formikActions: FormikHelpers<RegisterValues>) => void;
  values: RegisterValues;
}

function SignUpForm({onSubmit, values}: FormProps) {
  return(
    <Formik validationSchema={validations} onSubmit={onSubmit} initialValues={values}>
      {
        ({handleChange, handleBlur, handleSubmit, isValid, isSubmitting, errors, touched}) => (
          <>            
            <TextInput
              placeholder="Nome"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              caption={errors.name && touched.name ? errors.name : ''}
              autoFocus
            />
            <TextInput
              placeholder="E-mail"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              caption={errors.email && touched.email ? errors.email : ''}
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Senha"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              caption={errors.password && touched.password ? errors.password : ''}
              autoCapitalize="none"
              secureTextEntry
            />

            <SignUpButton
              disabled={!isValid}
              onPress={() => handleSubmit()}
            >
              <SignUpButtonText>
                {isSubmitting ? <Spinner/> : 'Cadastrar'}
              </SignUpButtonText>
            </SignUpButton>
          </>
        )
      }
    </Formik>
  );
}

export default SignUpForm;