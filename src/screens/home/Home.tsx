import {
  Container,
  Title,
  Header,
  ImageMenu,
  SearchHome,
  IconSearch,
  SearchHomeView,
  OptionsHomeView,
  Option,
  WatchHomeView,
  TitleWatch,
} from './Home.style';
import { StatusBar, Text } from 'react-native';
import React from 'react';
import { optionsHome } from '../../data/data';
import Pokemons from '../pokemons/Pokemons';

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
      <OptionsHomeView
        data={optionsHome}
        numColumns={2}
        renderItem={({ item }) => {
          return <Option key={item.id} backgroundColor={item.color} />;
        }}
      />
      <WatchHomeView>
        <TitleWatch>Assistir</TitleWatch>
      </WatchHomeView>
      <StatusBar style="auto" backgroundColor="#090f0b" />
    </Container>
  );
}
