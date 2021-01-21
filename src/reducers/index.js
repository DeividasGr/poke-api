import { combineReducers } from 'redux';

const initialState = {
  laoding: false,
  data: [],
  errorMsg: '',
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
        data: action.paylaod,
        errorMsg: '',
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  pokemonListReducer,
});

export default reducer;
