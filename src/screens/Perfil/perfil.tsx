import React, { useContext } from 'react';

import { SessionContext } from '../../store/session';
import { Icon } from '../../components/Icon/Icon';
import { widthPercentageToDP } from '../../utils/metrics';

import {
  Container,
  UserInfoContent,
  Name,
  Header,
  AccountInfo,
  Info,
  InfoTitle,
  Description,
  DescriptionAndButton,
  ChangeButton,
  LineButtons,
  Button,
  ButtonText,
  ButtonListContent,
  ListButton
} from './styles';
import { Alert } from 'react-native';

function Perfil() {

  const { actions, state } = useContext(SessionContext);

  function handleLogout() {
    Alert.alert(
      "Deseja realmente sair?",
      "Você não poderá aproveitar nosso conteúdo após sair. Deseja realmente sair?",
      [
        {
          text: "Sim",
          onPress: () => actions.expulseCurrentUser()
        },
        {
          text: "Não"
        }
      ]
    );
  }

  return(
    <Container>
      <UserInfoContent>
        <Header>
          <Icon
            icon="user"
            style={{
              width: widthPercentageToDP(6),
              height: widthPercentageToDP(6)
            }}
          />
          <Name>{state.user?.name}</Name>
        </Header>

        <AccountInfo>
          <Info style={{flexDirection: "row", marginTop: 0}}>
            <InfoTitle>
              ID
            </InfoTitle>
            <Description style={{marginLeft: 3}}>
              {state.user?.id}
            </Description>
          </Info>
          <Info>
            <InfoTitle>
              Email:
            </InfoTitle>
            <Description>
              {state.user?.email}
            </Description>
          </Info>
          <Info>
            <InfoTitle>
              Senha:
            </InfoTitle>
            <DescriptionAndButton>
              <Description>
                *********
              </Description>
              <ChangeButton>
                <Icon
                  icon="change"
                  style={{
                    width: widthPercentageToDP(6.5),
                    height: widthPercentageToDP(6.5)
                  }}
                />
              </ChangeButton>  
            </DescriptionAndButton>
          </Info>
        </AccountInfo>

        <LineButtons>
          <Button>
            <Icon
              icon="favorite"
              style={{
                width: widthPercentageToDP(5.5),
                height: widthPercentageToDP(5.5)
              }}
            />
            <ButtonText>
              Favoritos
            </ButtonText>
          </Button>
          <Button>
            <Icon
              icon="wishlist"
              style={{
                width: widthPercentageToDP(5.5),
                height: widthPercentageToDP(5.5)
              }}
            />
            <ButtonText>
              Quero ver
            </ButtonText>
          </Button>
        </LineButtons>
      </UserInfoContent>
      <ButtonListContent>
        <ListButton>
          <ButtonText>
            Meus amigos
          </ButtonText>
          <Icon
            icon="chevronRight"
            style={{
              width: widthPercentageToDP(3.5),
              height: widthPercentageToDP(3.5)
            }}
          />
        </ListButton>

        <ListButton onPress={() => handleLogout()}>
          <ButtonText>
            Sair
          </ButtonText>
          <Icon
            icon="chevronRight"
            style={{
              width: widthPercentageToDP(3.5),
              height: widthPercentageToDP(3.5)
            }}
          />
        </ListButton>
        
      </ButtonListContent>
    </Container>
  );
}

export default Perfil;