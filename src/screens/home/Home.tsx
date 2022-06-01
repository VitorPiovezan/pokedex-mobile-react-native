import { Container, Title } from './Home.style';
import { StatusBar, Text } from 'react-native';
import React from 'react';

export default function HomePage() {
  return (
    <Container>
      <Title>Qual Pokémon você está procurando?</Title>
      <StatusBar style="auto" />
    </Container>
  );
}
