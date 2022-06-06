import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const CardView = styled(TouchableOpacity)`
  width: 175px;
  margin: 0 2%;
  padding: 20px;
  border: 1px solid #606060;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const ImagePokemon = styled.Image``;

export const NamePokemon = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

export const HashPokemon = styled.Text`
  color: white;
  font-size: 13px;
  position: absolute;
  left: 0px;
  padding: 10px;
`;
