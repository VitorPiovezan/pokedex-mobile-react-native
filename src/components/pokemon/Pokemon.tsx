import { Text, Image, FlatList } from 'react-native';
import { Container } from '../../screens/home/Home.style';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import ListTypes from '../cardPokemonList/Types';

export default function Pokemon({ navigation, route }) {
  const pokemon = route.params.data;

  const [pokemonData, setPokemonData] = useState({});
  const [hash, setHash] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [types, setTypes] = useState([]);

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
        setName(res.data.name[0].toUpperCase() + res.data.name.substring(1));
        setTypes(res.data.types);
      })
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
        alert('Falha ao se conectar ao servidor: ' + err);
      });
  }, [!pokemonData]);

  return (
    <Container>
      <Image style={{ width: 250, height: 250 }} source={{ uri: image }} />
      <Text
        style={{
          color: '#fff',
          fontSize: 35,
          fontWeight: 'bold',
          paddingTop: 30,
        }}
      >
        {name}
      </Text>
      <FlatList
        data={types}
        numColumns={2}
        renderItem={({ item }) => {
          return <ListTypes name={item.type.name} />;
        }}
      />
    </Container>
  );
}
