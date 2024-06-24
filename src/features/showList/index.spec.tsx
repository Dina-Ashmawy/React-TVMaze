import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ShowList from '.';
import { mockShows } from '../../../mock/test.mock';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('ShowList component', () => {
  it('renders without crashing', () => {
    const store = mockStore({
      shows: { favoriteShows: [], filteredShows: mockShows },
    });
    const { container } = render(
      <Provider store={store}>
        <ShowList items={[]} />
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });
});
