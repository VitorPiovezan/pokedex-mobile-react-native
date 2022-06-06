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
import React from 'react';
import { optionsHome } from '../../data/data';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

export default function HomePage({ navigation }) {
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
          return (
            <Option
              key={item.id}
              backgroundColor={item.color}
              onPress={() => navigation.navigate(item.route)}
            />
          );
        }}
      />
      <WatchHomeView>
        <TitleWatch>Assistir</TitleWatch>
      </WatchHomeView>
    </Container>
  );
}
