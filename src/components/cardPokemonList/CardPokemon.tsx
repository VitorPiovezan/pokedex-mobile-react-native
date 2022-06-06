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
  const [image, setImage] = useState(null);

  function pad(num, size) {
    var s = '000000000' + num;
    return s.substr(s.length - size);
  }
  useEffect(() => {
    api
      .get(`pokemon/${pokemon.name}`)
      .then(res => {
        setPokemonData(res.data);
        res.data.sprites.other.home.front_default
          ? setImage(res.data.sprites.other.home.front_default)
          : res.data.sprites.front_default
          ? setImage(res.data.sprites.front_default)
          : null;
        setHash(pad(res.data.id, 3));
      })
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
        alert('Falha ao se conectar ao servidor: ' + err);
      });
  }, [!pokemonData]);

  return (
    <CardView>
      <HashPokemon>#{hash}</HashPokemon>
      <ImagePokemon
        style={{ width: 100, height: 100 }}
        source={{ uri: image }}
      />
      <NamePokemon>{pokemon.name}</NamePokemon>
    </CardView>
  );
}
