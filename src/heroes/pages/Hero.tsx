import React from 'react';
import { IHero } from '../data/heroes';

const Hero: React.FC<IHero> = ({ hero }: { hero: IHero }) => {
  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutter">

          <div className="col-4">
            <img className='card-img' src={`src/assets/heroes/${id}.jpg`} alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">Publisher: {publisher}</p>
              <p className="card-text">Alter Ego: {alter_ego}</p>
              <p className="card-text">First Appearance: {first_appearance}</p>
              <p className="card-text">Characters: {characters}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;