import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';
import './index.css';

function App() {
  return (
    <>
      <header>
        <nav className="nav">
          <NavLink className="nav__link" to="/">
            Search
          </NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={PokemonList} />
          <Route path="/pokemon/:pokemon" exact component={Pokemon} />
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
}

export default App;
