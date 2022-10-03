import React from 'react';
import { useSelector } from 'react-redux';
import { Heroes } from '../assets/data';
import CharacterSection from '../components/CharacterSelect/CharacterSection';
import {
  CharacterSelectContainer,
  SelectHeroesContainer,
} from '../styles/CharacterSelect.styles';

const CharacterSelect = () => {
  const xp = useSelector((state) => state.player.xp);
  console.log(xp);
  const availableHeroes = [];

  for (let i = 0; i < Heroes.length; i++) {
    if (Heroes[i].xpRequired <= xp) {
      availableHeroes.push(Heroes[i]);
    }
  }
  return (
    <CharacterSelectContainer>
      <h3>Current XP: {xp}</h3>
      <SelectHeroesContainer>
        <CharacterSection heroes={availableHeroes} />
      </SelectHeroesContainer>
    </CharacterSelectContainer>
  );
};

export default CharacterSelect;
