import {
  Container,
  Title,
  Header,
  ImageMenu,
  SearchHome,
  IconSearch,
  SearchHomeView,
} from './Home.style';
import { StatusBar, View } from 'react-native';
import React from 'react';

export default function HomePage() {
  return (
    <Container>
      <Header>
        <ImageMenu source={require('../../../assets/icons/menu.png')} />
        <Title>Qual Pokémon você está procurando?</Title>
      </Header>
      <SearchHomeView>
        <IconSearch source={require('../../../assets/icons/loupe_gray.png')} />
        <SearchHome
          placeholder="Buscar Pokémon"
          placeholderTextColor="#b8b6b3"
        />
      </SearchHomeView>
      <StatusBar style="auto" />
    </Container>
  );
}
