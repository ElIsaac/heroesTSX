import React from 'react';
import { IHero } from '../data/heroes';
import { Link } from 'react-router-dom';

const Hero: React.FC<IHero> = ({ hero }: { hero: IHero }) => {
  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
  return (
    <div className="col-md-6 col-lg-4 animate__animated animate__fadeIn">
      <div className="card">
        <img className="card-img-top" src={`src/assets/heroes/${id}.jpg`} alt={superhero} />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">Publisher: <small className='text-muted'>{publisher}</small></p>
          <p className="card-text">Alter Ego: <small className='text-muted'>{alter_ego}</small></p>
          <p className="card-text">First Appearance: <small className='text-muted'>{first_appearance}</small></p>
          <p className="card-text">Characters: <small className='text-muted'>{characters}</small></p>
        </div>
        <div className="card-footer">
          <Link to={`/hero/${id}`} className="btn btn-primary">
            Más información
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
