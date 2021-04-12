import React from 'react';
import {useNavigation} from '@react-navigation/native';

import { Icon } from '../../components/Icon/Icon';
import { Container, Main, PageContent, Text, NextButton, ButtonText } from './styles';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/metrics';

function Intro() {
  const navigation = useNavigation();

  return(
    <Container
      source={require('../../assets/background.png')}
      resizeMode="cover"
    >
      <PageContent>
        <Icon
          icon="logo" 
          style={{
            width: widthPercentageToDP(54),
            marginTop: heightPercentageToDP(9) 
          }}
        />
        <Main>
          <Text>
            Melhores recomendações {'\n'}
            de filmes e séries {'\n'}
            estão aqui
          </Text>

          <NextButton onPress={() => navigation.navigate('Session')}>
            <ButtonText>
              Começar
            </ButtonText>
          </NextButton>
        </Main>
      </PageContent>
    </Container>
  );
}

export default Intro;