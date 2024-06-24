import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SearchHistory from '.';
import '@testing-library/jest-dom';

describe('SearchHistory Component', () => {
  const lastSearches = ['Breaking Bad', 'Game of Thrones', 'The Office'];
  const handleItemClickMock = jest.fn();

  it('renders nothing when showHistory is false', () => {
    const { queryByRole } = render(
      <SearchHistory
        showHistory={false}
        lastSearches={lastSearches}
        handleItemClick={handleItemClickMock}
      />,
    );

    const lastSearchesList = queryByRole('list');
    expect(lastSearchesList).toBeNull();
  });

  it('renders list of last searches when showHistory is true', () => {
    const { getByText } = render(
      <SearchHistory
        showHistory={true}
        lastSearches={lastSearches}
        handleItemClick={handleItemClickMock}
      />,
    );

    lastSearches.forEach((search) => {
      const searchItem = getByText(search);
      expect(searchItem).toBeInTheDocument();
    });
  });

  it('calls handleItemClick with correct item when an item is clicked', () => {
    const { getByText } = render(
      <SearchHistory
        showHistory={true}
        lastSearches={lastSearches}
        handleItemClick={handleItemClickMock}
      />,
    );

    const itemToClick = getByText('Game of Thrones');
    fireEvent.click(itemToClick);

    expect(handleItemClickMock).toHaveBeenCalledWith('Game of Thrones');
  });
});
