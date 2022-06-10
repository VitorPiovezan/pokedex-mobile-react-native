import React, { useState, useEffect } from 'react';
import { typesStyles } from '../../data/data';
import {
  ViewType,
  TextType,
  ViewTypeOnlyBorder,
  TextTypeOnlyBorder,
} from './CardPokemon.style';

export default function ListTypes({ pokemonName, onlyBorder }) {
  const styleType = typesStyles.find(res => res.name == pokemonName);

  return (
    <>
      {onlyBorder ? (
        <ViewTypeOnlyBorder color={styleType.defaultColor}>
          <TextTypeOnlyBorder color={styleType.defaultColor}>
            {styleType.emoji}{' '}
            {pokemonName[0].toUpperCase() + pokemonName.substring(1)}
          </TextTypeOnlyBorder>
        </ViewTypeOnlyBorder>
      ) : (
        <ViewType color={styleType.defaultColor}>
          <TextType color={styleType.textColor}>{pokemonName}</TextType>
        </ViewType>
      )}
    </>
  );
}
