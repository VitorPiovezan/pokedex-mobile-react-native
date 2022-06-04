import {
  CardView,
  HashPokemon,
  ImagePokemon,
  NamePokemon,
} from './CardPokemon.style';
import { useEffect, useState } from 'react';
import api from '../../api/api';

export default function CardPokemon({ pokemon }) {
  const [pokemonData, setPokemonData] = useState({});
  const [hash, setHash] = useState(null);

  function pad(num, size) {
    var s = '000000000' + num;
    return s.substr(s.length - size);
  }
  useEffect(() => {
    api
      .get(`pokemon/${pokemon.name}`)
      .then(response => setPokemonData(response.data))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
        alert('Falha ao se conectar ao servidor: ' + err);
      });
  }, []);

  return (
    <CardView>
      <HashPokemon>#{hash}</HashPokemon>
      <ImagePokemon
        style={{ width: 100, height: 100 }}
        source={{
          uri: pokemonData.sprites.front_default,
        }}
      />
      <NamePokemon>{pokemon.name}</NamePokemon>
    </CardView>
  );
}
