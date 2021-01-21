import { PokemonListReducer } from './PokemonListReducer';
import { PokemonMultipleReducer } from './PokemonMultipleReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  PokemonListReducer,
  PokemonMultipleReducer,
});
export default reducer;
