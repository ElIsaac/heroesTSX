import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../helpers/getHeroeById';
import { IHero } from '../data/heroes';

const HeroPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const hero: IHero | undefined = getHeroeById(params.id);

  const onReturn = (): void => {
    navigate(-1);
  }

  if (hero === undefined) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img className="img-thumbnail" src={`/src/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} />
        </div>
        <div className="col-md-8">

          <h2>{hero.superhero}</h2>

          <hr />

          <ul className="list-group list-group-flush">
            <li className="list-group-item">Publisher: {hero.publisher}</li>
            <li className="list-group-item">Alter Ego: {hero.alter_ego}</li>
            <li className="list-group-item">First Appearance: {hero.first_appearance}</li>
          </ul>

          <h5 className="mt-5">Characters</h5>
          <p>{hero.characters}</p>

          <button 
          className="btn btn-outline-primary"
          onClick={onReturn}
          >
            return
          </button>

        </div>
      </div>
    </div>
  );
};

export default HeroPage;
