import styled from 'styled-components';

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
  margin: 13px 20px
  z-index: 3;
`;
