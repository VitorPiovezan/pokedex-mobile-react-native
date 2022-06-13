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
import { typesStyles } from '../../data/data';

export function pad(num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
}

export default function CardPokemon({ pokemon }) {
  const [pokemonData, setPokemonData] = useState({});
  const [hash, setHash] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [types, setTypes] = useState([]);
  const [shadowColor, setShadowColor] = useState({});

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
        let shadow = typesStyles.find(
          e => e.name == res.data.types[0].type.name
        );
        setShadowColor(shadow);
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
        shadowColor: `${shadowColor ? shadowColor.defaultColor : '#dff5e1'}`,
        shadowOpacity: 0.5,
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
        listKey={(item, index) => `_key${index.toString()}`}
        keyExtractor={(item, index) => `_key${index.toString()}`}
        renderItem={({ item }) => {
          return <ListTypes pokemonName={item.type.name} />;
        }}
      />
    </CardView>
  );
}
