import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import FavoriteShows from '.';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('FavoriteShows Component', () => {
  it('renders "There are no favorite shows." when favorites array is empty', () => {
    const store = mockStore({
      shows: { favoriteShows: [], filteredShows: [] },
    });

    const { getByText } = render(
      <Provider store={store}>
        <FavoriteShows />
      </Provider>,
    );

    expect(getByText('There are no favorite shows.')).toBeInTheDocument();
  });

  it('renders list of favorite shows when favorites array has items', () => {
    const store = mockStore({
      shows: { favoriteShows: ['Show A', 'Show B', 'Show C'] },
    });

    const { getByText, getAllByRole } = render(
      <Provider store={store}>
        <FavoriteShows />
      </Provider>,
    );
    expect(getByText('My Favorite Shows')).toBeInTheDocument();
    const favoriteItems = getAllByRole('listitem');
    expect(favoriteItems).toHaveLength(3);
    expect(getByText('Show A')).toBeInTheDocument();
    expect(getByText('Show B')).toBeInTheDocument();
    expect(getByText('Show C')).toBeInTheDocument();
  });
});
