import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from '../../action';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import './index.css';

function PokemonList({ history }) {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonListReducer);

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
              <div key={pokemon.name} className="pokemon-list__item">
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
      return <p className="pokemon-list__loading">Loading...</p>;
    }

    if (pokemonList.errorMsg !== '') {
      return <p className="pokemon-list__error">{PokemonList.errorMsg}</p>;
    }

    return <p className="pokemon-list__error">unable to get data</p>;
  };

  return (
    <section>
      <div className="search">
        <p>Search:</p>
        <input
          className="search__input"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button
          className="search__btn"
          onClick={() => history.push(`/pokemon/${search}`)}
        >
          Search
        </button>
      </div>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={pokemonList.count / 15}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName="pagination"
        />
      )}
    </section>
  );
}

export default PokemonList;
