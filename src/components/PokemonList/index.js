import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from '../../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './index.css';

function PokemonList() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonListReducer);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="pokemon-list">
          {pokemonList.data.map((pokemon) => {
            return (
              <div className="pokemon-list__item">
                <p>{pokemon.name}</p>
                <Link
                  className="pokemon-list__link"
                  to={`/pokemon/${pokemon.name}`}
                >
                  View
                </Link>
              </div>
            );
          })}
        </div>
      );
    }

    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonList.errorMsg !== '') {
      return <p>{PokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return <section>{showData()}</section>;
}

export default PokemonList;
