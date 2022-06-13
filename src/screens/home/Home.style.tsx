import styled from 'styled-components';
import { FlatList, TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #090f0b;
  align-items: center;
`;
export const Header = styled.View`
  width: 90%;
  padding: 30px 0px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  width: 70%;
`;

export const ImageMenu = styled.Image`
  width: 25px;
  margin-bottom: 30px;
`;

export const SearchHomeView = styled.View`
  width: 90%;
`;

export const SearchHome = styled.TextInput`
  color: #fff;
  background-color: #3e4047;
  padding: 10px 50px;
  border-radius: 25px;
`;

export const IconSearch = styled.Image`
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 13px 20px;
  z-index: 3;
`;

export const OptionsHomeView = styled(FlatList)`
  margin-top: 15px;
  width: 90%;
  max-height: 200px;
`;

export const Option = styled.Image`
  width: 175px;
  height: 78px;
  margin-top: 20px;
  margin-right: 5%;
`;

export const WatchHomeView = styled.View`
  margin-top: 30px;
  width: 90%;
`;

export const TitleWatch = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border-bottom-color: #363636;
  border-bottom-width: 1px;
  padding-bottom: 10px;
`;
