import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { getHeroeByName } from '../helpers/getHeroeByName';
import { IHero } from '../data/heroes'
import HeroCard from './HeroCard'

const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const searchText = typeof q === 'string' ? q : '';
  
  const { formState, onInputChange, onResetForm } = useForm({ searchText });
  

  const heroes: IHero[] = getHeroeByName(q);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formState.searchText.trim().length <= 1) return;
    navigate(`?q=${formState.searchText.toLocaleLowerCase().trim()}`);

    onResetForm();
  };

  return (
    <>
      <h1>search</h1>
      <div className="row">
        <div className="col-4">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchText"
              autoComplete="off"
              placeholder="Search"
              value={formState.searchText}
              onChange={onInputChange}
              className="form-control"
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-8">
          <h4>Results</h4>
          {(q === '') ? <div className="alert alert-primary">Search a hero</div> : (heroes.length) === 0 ? (
            <div className="alert alert-danger">No hero with <strong>{q}</strong></div>
          ) : (
            <div className="row">
              {heroes.map(hero => (
                <HeroCard key={hero.id} hero={hero} />
              ))}
            </div>
          )}
          {

          }
        </div>
      </div>
    </>
  );
};

export default SearchPage;
