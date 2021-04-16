import styled from "styled-components/native";
import { heightPercentageToDP, widthPercentageToDP } from "../../utils/metrics";

export const Container = styled.View`
  flex: 1;
  padding: ${widthPercentageToDP(3)+'px'};
  padding-top: ${widthPercentageToDP(18)+'px'};
  background-color: #191919;
`;

export const Name = styled.Text`
  font-size: ${widthPercentageToDP(6)};
  font-weight: bold;
  color: #f8f8f8;
  margin-left: 10px;
`;

export const Header = styled.View`
  height: ${heightPercentageToDP(4.2)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UserInfoContent = styled.View`
  flex: 1;
`;

export const AccountInfo = styled.View`
  width: 94%;
  margin: 0 auto;
  padding: ${widthPercentageToDP(6.5) + 'px'};
  border-radius: 8px;
  background-color: #f7f7;

  margin-top: 24px;
`;

export const Info = styled.View`
  margin-top: 14px;
`;

export const InfoTitle = styled.Text`
  font-size: ${widthPercentageToDP(4.1)};
  color: #c1c1c1;
`;

export const Description = styled.Text`
  font-size: ${widthPercentageToDP(4.1)};
  font-weight: bold;
  color: #f8f8f8;
`;

export const DescriptionAndButton = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ChangeButton = styled.TouchableOpacity`
  margin-left: 60px;
`;

export const LineButtons = styled.View`
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  padding: ${heightPercentageToDP(2.2)+ 'px'};
  background-color: #232323;
  border-width: 1.2;
  border-color: #191919;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: ${widthPercentageToDP(4.1)};
  color: #f8f8f8;
  margin-left: 5px;
`;

export const ButtonListContent = styled.View`
  flex: 1;
  padding-top: ${heightPercentageToDP(5)+ 'px'};
`;

export const ListButton = styled.TouchableOpacity`
  height: ${heightPercentageToDP(7.2)};
  padding: ${heightPercentageToDP(2.2)+ 'px'};
  background-color: #232323;
  border-width: 1.2;
  border-color: #191919;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

