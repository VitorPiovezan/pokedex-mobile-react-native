import { StatusBar } from 'react-native';
import HomePage from './src/screens/home/Home';
import Pokemons from './src/screens/pokemons/Pokemons';
export { default as App } from './src/screens/home/Home';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" backgroundColor="#000" />
    </>
  );
}
