import React, { useEffect } from 'react';
import { getPokemon } from '../../action';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import './index.css';

function Pokemon({ match }) {
  const pokemonName = match.params.pokemon;

  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.PokemonMultipleReducer);

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      const { sprites, stats, abilities, types } = pokeData;
      return (
        <div className="pokemon">
          <div className="pokemon__item">
            <h3 className="pokemon__item__head">Sprites</h3>
            <div className="pokemon__item__image__box">
              <img
                className="pokemon__item__image"
                src={sprites.front_default}
                alt="pokemon front"
              />
              <img
                className="pokemon__item__image"
                src={sprites.back_default}
                alt="pokemon back"
              />
            </div>
          </div>
          <div className="pokemon__item">
            <h3 className="pokemon__item__head">Type</h3>
            {types.map((type, index) => {
              return (
                <p className="pokemon__item__content" key={index}>
                  {type.type.name}
                </p>
              );
            })}
          </div>
          <div className="pokemon__item">
            <h3 className="pokemon__item__head">Stats</h3>
            {stats.map((stat, index) => {
              return (
                <p className="pokemon__item__content" key={index}>
                  {stat.stat.name} - {stat.base_stat}
                </p>
              );
            })}
          </div>
          <div className="pokemon__item">
            <h3 className="pokemon__item__head">Abilities</h3>
            {abilities.map((ability, index) => {
              return (
                <p className="pokemon__item__content" key={index}>
                  {ability.ability.name}
                </p>
              );
            })}
          </div>
        </div>
      );
    }
    if (pokemonState.loading) {
      return <p className="pokemon__loading">Loading...</p>;
    }
    if (pokemonState.errorMsg !== '') {
      return <p className="pokemon__error">{pokemonState.errorMsg}</p>;
    }
    return <p>unable to find pokemon</p>;
  };

  return (
    <section className="poke__container">
      <h2 className="pokemon__title">{pokemonName}</h2>
      {showData()}
    </section>
  );
}

export default Pokemon;
