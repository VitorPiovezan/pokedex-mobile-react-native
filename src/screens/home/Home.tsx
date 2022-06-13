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
        <Title>What Pokémon are you looking for?</Title>
      </Header>
      <SearchHomeView>
        <IconSearch source={require('../../../assets/icons/loupe_gray.png')} />
        <SearchHome
          placeholder="Search Pokémon"
          placeholderTextColor="#b8b6b3"
        />
      </SearchHomeView>
      <OptionsHomeView
        data={optionsHome}
        numColumns={2}
        listKey={item => item.id.toString()}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
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
        <TitleWatch>Watch</TitleWatch>
      </WatchHomeView>
    </Container>
  );
}
