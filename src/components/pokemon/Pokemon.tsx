import { Text, Image, FlatList, View, TouchableOpacity } from 'react-native';
import { Container } from '../../screens/home/Home.style';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import ListTypes from '../cardPokemonList/Types';
import { pad } from '../cardPokemonList/CardPokemon';

export default function Pokemon({ navigation, route }) {
  const pokemon = route.params.data;

  const [pokemonData, setPokemonData] = useState({});
  const [hash, setHash] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [types, setTypes] = useState([]);
  const [specie, setSpecie] = useState(null);
  const [specieLink, setSpecieLink] = useState(null);

  useEffect(() => {
    let species = '';
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
        setSpecieLink(res.data.species.url.substring(26));
        setHash(pad(res.data.id, 3));
      })
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
        alert('Falha ao se conectar ao servidor: ' + err);
      });
    api.get(specieLink).then(res => {
      const dataSpecie = res.data.genera.find(e => e.language.name == 'en');
      setSpecie(dataSpecie.genus);
    });
  }, [!pokemonData, specieLink]);

  return (
    <Container>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          paddingTop: 60,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Pokemons')}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {'<'}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          #{hash}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {'<3'}
          </Text>
        </TouchableOpacity>
      </View>
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
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          paddingTop: 15,
          paddingBottom: 5,
        }}
      >
        {specie}
      </Text>
      <FlatList
        data={types}
        numColumns={2}
        renderItem={({ item }) => {
          return <ListTypes pokemonName={item.type.name} onlyBorder />;
        }}
      />
    </Container>
  );
}
