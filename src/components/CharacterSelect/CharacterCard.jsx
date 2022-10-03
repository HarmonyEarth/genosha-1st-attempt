import React from 'react';
import { SelectHeroCard } from '../../styles/CharacterSelect.styles';

const CharacterCard = ({ selectHeroAnim, selectHeroName }) => {
  return (
    <SelectHeroCard>
      <img src={selectHeroAnim} alt={selectHeroName} />
      <h3>{selectHeroName}</h3>
    </SelectHeroCard>
  );
};

export default CharacterCard;
