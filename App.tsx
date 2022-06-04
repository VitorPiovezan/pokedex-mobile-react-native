import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/screens/home/Home';
import Pokemons from './src/screens/pokemons/Pokemons';
export { default as App } from './src/screens/home/Home';

export default function App() {
  return (
    <>
      <Pokemons />
    </>
  );
}
