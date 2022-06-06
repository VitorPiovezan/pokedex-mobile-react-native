import React, { useState, useEffect } from 'react';

import { ViewType, TextType } from './CardPokemon.style';

export default function ListTypes({ name }) {
  const [background, setBackground] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (name === 'bug') {
      setBackground('#729f3f');
      setColor('#fff');
    } else if (name === 'dark') {
      setBackground('#707070');
      setColor('#fff');
    } else if (name === 'dragon') {
      setBackground('#f16e57');
      setColor('#fff');
    } else if (name === 'electric') {
      setBackground('#eed535');
      setColor('#000');
    } else if (name === 'fairy') {
      setBackground('#fdb9e9');
      setColor('#000');
    } else if (name === 'fighting') {
      setBackground('#d56723');
      setColor('#fff');
    } else if (name === 'fire') {
      setBackground('#fd7d24');
      setColor('#fff');
    } else if (name === 'flying') {
      setBackground('#3dc7ef');
      setColor('#000');
    } else if (name === 'ghost') {
      setBackground('#7b62a3');
      setColor('#fff');
    } else if (name === 'grass') {
      setBackground('#9bcc50');
      setColor('#fff');
    } else if (name === 'ground') {
      setBackground('#f7de3f');
      setColor('#000');
    } else if (name === 'ice') {
      setBackground('#51c4e7');
      setColor('#000');
    } else if (name === 'normal') {
      setBackground('#a4acaf');
      setColor('#fff');
    } else if (name === 'poison') {
      setBackground('#b97fc9');
      setColor('#fff');
    } else if (name === 'psychic') {
      setBackground('#f366b9');
      setColor('#fff');
    } else if (name === 'rock') {
      setBackground('#a38c21');
      setColor('#fff');
    } else if (name === 'steel') {
      setBackground('#9eb7b8');
      setColor('#000');
    } else if (name === 'water') {
      setBackground('#4592c4');
      setColor('#fff');
    }
  }, []);

  return (
    <ViewType color={background}>
      <TextType color={color}>{name}</TextType>
    </ViewType>
  );
}
