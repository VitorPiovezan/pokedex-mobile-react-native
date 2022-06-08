import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const CardView = styled(TouchableOpacity)`
  width: 175px;
  margin: 0 2%;
  padding: 30px 20px;
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
  margin-top: 15px;
`;

export const HashPokemon = styled.Text`
  color: white;
  font-size: 13px;
  position: absolute;
  left: 0px;
  padding: 10px;
`;

export const ViewType = styled.View`
  width: 60px;
  height: 20px;
  border-radius: 4px;
  text-align: center;
  margin-left: 5px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
`;

export const TextType = styled.Text`
  padding: 3px;
  font-size: 11px;
  font-weight: bold;
  color: ${props => props.color};
`;
