import searchReducer, {
  addLastSearch,
  setSearchTerm,
  selectLastSearches,
  selectSearchTerm,
} from './searchSlice';

describe('searchSlice reducer', () => {
  it('should add last search correctly', () => {
    const initialState = { lastSearches: [], searchTerm: '' };
    const newState = searchReducer(initialState, addLastSearch('Query 1'));
    expect(newState.lastSearches).toEqual(['Query 1']);
  });

  it('should set search term correctly', () => {
    const initialState = { lastSearches: [], searchTerm: '' };
    const newState = searchReducer(
      initialState,
      setSearchTerm('New Search Term'),
    );
    expect(newState.searchTerm).toEqual('New Search Term');
  });

  it('should select last searches correctly', () => {
    const state: any = {
      search: { lastSearches: ['Query 1', 'Query 2'], searchTerm: '' },
    };
    const selectedSearches = selectLastSearches(state);
    expect(selectedSearches).toEqual(['Query 1', 'Query 2']);
  });

  it('should select search term correctly', () => {
    const state: any = {
      search: { lastSearches: [], searchTerm: 'Search Term' },
    };
    const selectedTerm = selectSearchTerm(state);
    expect(selectedTerm).toEqual('Search Term');
  });
});
