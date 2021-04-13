import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Input, Caption } from './styles';

export interface ComponentTextInput extends TextInputProps {
  caption: string|undefined;
}

function TextInput({ caption, placeholder, onChangeText, onBlur, autoCapitalize, autoFocus, secureTextEntry }: ComponentTextInput) {
  return(
    <Container>
      <Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        caption={caption}
      />
      <Caption>
        { caption && `*${caption}` }
      </Caption>
    </Container>
  );
}

export default TextInput;