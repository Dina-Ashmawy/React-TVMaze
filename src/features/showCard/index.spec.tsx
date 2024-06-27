import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ShowCard from '.';
import { mockSingleShow } from '../../../mock/test.mock';

const mockStore = configureStore([]);

describe('ShowCard component', () => {
  it('renders show information correctly', () => {
    const store = mockStore({
      shows: { favoriteShows: [], filteredShows: [] },
    });
    render(
      <Provider store={store}>
        <Router>
          <ShowCard show={mockSingleShow} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(mockSingleShow.name)).toBeInTheDocument();
    expect(
      screen.getByText(`Genres: ${mockSingleShow.genres.join(', ')}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Year: ${mockSingleShow.premiered}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Rating: ${mockSingleShow.rating.average}`),
    ).toBeInTheDocument();
  });
});
