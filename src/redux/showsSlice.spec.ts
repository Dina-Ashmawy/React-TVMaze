import { mockShows } from './../../mock/test.mock';
import showsReducer, {
  setFavoriteShows,
  setFilteredShows,
  selectFavoriteShows,
  selectFilteredShows,
} from './showsSlice';

describe('showsSlice reducer', () => {
  it('should set favorite shows correctly', () => {
    const initialState = { favoriteShows: [], filteredShows: [] };
    const newState = showsReducer(
      initialState,
      setFavoriteShows(['Show A', 'Show B']),
    );
    expect(newState.favoriteShows).toEqual(['Show A', 'Show B']);
  });

  it('should set filtered shows correctly', () => {
    const initialState = { favoriteShows: [], filteredShows: [] };

    const newState = showsReducer(initialState, setFilteredShows(mockShows));
    expect(newState.filteredShows).toEqual(mockShows);
  });

  it('should select favorite shows correctly', () => {
    const state: any = {
      shows: { favoriteShows: ['Show A', 'Show B'], filteredShows: [] },
    };
    const selectedShows = selectFavoriteShows(state);
    expect(selectedShows).toEqual(['Show A', 'Show B']);
  });

  it('should select filtered shows correctly', () => {
    const state: any = {
      shows: {
        favoriteShows: [],
        filteredShows: mockShows,
      },
    };
    const selectedShows = selectFilteredShows(state);
    expect(selectedShows).toEqual(mockShows);
  });
});
