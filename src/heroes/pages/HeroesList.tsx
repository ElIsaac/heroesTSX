import React, { useMemo } from 'react';
import {getHeroesByPublisher} from '../helpers/getHeroesByPublisher';
import Hero from './HeroCard';

interface HeroesListProps {
  publisher: string;
}

const HeroesList: React.FC<HeroesListProps> = ({ publisher }) => {
  const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher]);
  return (
    <>
    
      <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
          <Hero key={hero.id} hero={hero}></Hero>
        ))}
      </div>
    </>
  );
};

export default HeroesList;
