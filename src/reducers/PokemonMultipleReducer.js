const initialState = {
  loading: false,
  data: {},
  errorMsg: '',
};

export const PokemonMultipleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POKEMON_MULTIPLE_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'POKEMON_MULTIPLE_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'failed to find pokemon',
      };
    case 'POKEMON_MULTIPLE_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    default:
      return state;
  }
};
