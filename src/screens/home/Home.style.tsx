import styled from 'styled-components';
import { FlatList } from 'react-native';

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
  padding-top: 30px;
`;

export const ImageMenu = styled.Image`
  width: 25px;
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

export const Option = styled.View`
  background-color: ${props => props.backgroundColor};
  width: 47%;
  height: 70px;
  border-radius: 15px;
  opacity: 0.6;
  margin-top: 20px;
  margin-right: 5%;
`;

export const WatchHomeView = styled.View`
  margin-top: 15px;
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
