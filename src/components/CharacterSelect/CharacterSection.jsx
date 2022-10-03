import React from 'react';
import { SelectHeroSection } from '../../styles/CharacterSelect.styles';
import CharacterCard from './CharacterCard';

const CharacterSection = ({ heroes }) => {
  return (
    <SelectHeroSection>
      {heroes.map((hero) => (
        <CharacterCard
          selectHeroAnim={hero.selectGif}
          selectHeroName={hero.name}
          key={hero.name}
        />
      ))}
    </SelectHeroSection>
  );
};

export default CharacterSection;
