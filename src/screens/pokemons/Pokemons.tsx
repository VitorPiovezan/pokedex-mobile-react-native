import { Container, Title } from '../home/Home.style';
import { useState, useEffect } from 'react';
import api from '../../api/api';
import { Header, ImageMenu } from '../home/Home.style';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import CardPokemon from '../../components/cardPokemonList/CardPokemon';

export default function Pokemons({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`pokemon?offset=0&limit=${50 * page}`)
      .then(res => {
        if (pokemons) {
          setPokemons(res.data.results);
        } else {
          setPokemons(...pokemons, res.data.results);
        }
      })
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
        alert('Falha ao se conectar ao servidor: ' + err);
      });
  }, [page]);

  function loadPokemons() {
    setPage(page + 1);
  }

  return (
    <Container>
      <FlatList
        data={pokemons}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Pokemon', { data: item })}
            >
              <CardPokemon pokemon={item} />
            </TouchableOpacity>
          );
        }}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
}
