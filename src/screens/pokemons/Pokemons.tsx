import { Container, Title } from '../home/Home.style';
import { useState, useEffect } from 'react';
import api from '../../api/api';
import { Header, ImageMenu } from '../home/Home.style';
import { FlatList, Text } from 'react-native';
import CardPokemon from '../../components/cardPokemonList/CardPokemon';

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api
      .get('pokemon')
      .then(response => setPokemons(response.data.results))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
        alert('Falha ao se conectar ao servidor: ' + err);
      });
  }, []);

  return (
    <Container>
      <FlatList
        data={pokemons}
        numColumns={2}
        renderItem={({ item }) => {
          return <CardPokemon pokemon={item} />;
        }}
      />
    </Container>
  );
}
