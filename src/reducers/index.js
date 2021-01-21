import { combineReducers } from 'redux';

const initialState = {
  laoding: false,
  data: [],
  errorMsg: '',
  count: 0,
};

const pokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POKEMON_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'POKEMON_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Failed to get pokemon',
      };
    case 'POKEMON_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: '',
        count: action.payload.count,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  pokemonListReducer,
});

export default reducer;
