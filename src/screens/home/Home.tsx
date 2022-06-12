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
import { TouchableOpacity } from 'react-native';

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
        renderItem={({ item, index }) => {
          console.log(item);
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.route)}
            >
              <Option
                source={{
                  uri: item.url,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
      <WatchHomeView>
        <TitleWatch>Assistir</TitleWatch>
      </WatchHomeView>
    </Container>
  );
}
