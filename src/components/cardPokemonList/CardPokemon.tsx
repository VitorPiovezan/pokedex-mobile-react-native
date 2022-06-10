import {
  CardView,
  HashPokemon,
  ImagePokemon,
  NamePokemon,
} from './CardPokemon.style';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { FlatList, Text } from 'react-native';
import ListTypes from './Types';

export default function CardPokemon({ pokemon }) {
  const [pokemonData, setPokemonData] = useState({});
  const [hash, setHash] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [types, setTypes] = useState([]);

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
        setName(res.data.name[0].toUpperCase() + res.data.name.substring(1));
        setTypes(res.data.types);
      })
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
        alert('Falha ao se conectar ao servidor: ' + err);
      });
  }, [!pokemonData]);
  return (
    <CardView
      style={{
        shadowOffset: { width: 3, height: 2 },
        shadowColor: '#dff5e1',
        shadowOpacity: 0.4,
        shadowRadius: 35,
        zIndex: 999,
      }}
    >
      <HashPokemon>#{hash}</HashPokemon>
      <ImagePokemon
        style={{
          width: 100,
          height: 100,
        }}
        source={{ uri: image }}
      />
      <NamePokemon>{name}</NamePokemon>
      <FlatList
        data={types}
        numColumns={2}
        renderItem={({ item }) => {
          return <ListTypes pokemonName={item.type.name} />;
        }}
      />
    </CardView>
  );
}
