import React from 'react';
import {getHeroesByPublisher} from '../helpers/getHeroesByPublisher';
import Hero from './Hero';

interface HeroesListProps {
  publisher: string;
}

const HeroesList: React.FC<HeroesListProps> = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
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
