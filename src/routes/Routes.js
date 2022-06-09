import HomePage from '../screens/home/Home';
import Pokemons from '../screens/pokemons/Pokemons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { ImageMenu } from '../screens/home/Home.style';
import Pokemon from '../components/pokemon/Pokemon';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pokemons"
          component={Pokemons}
          options={{
            title: 'Pokemons',
            headerStyle: {
              backgroundColor: '#090f0b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Pokemon"
          component={Pokemon}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: '#090f0b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
