import React from 'react';
import SearchBar from '../features/searchBar';
import ShowList from '../features/showList';
import { usePagination } from '../hooks/usePagination';
import { useSelector } from 'react-redux';
import FavoriteShows from '../features/favoriteShows';
import PaginationControls from '../features/paginationControls';
import { selectFilteredShows } from '../redux/showsSlice';

const HomePage: React.FC = () => {
  const filteredShows = useSelector(selectFilteredShows);
  const { currentLocalPage, handlePageClick, getLocalPageItems } =
    usePagination();

  const showItems =
    filteredShows.length > 0
      ? filteredShows
      : getLocalPageItems(currentLocalPage);
  return (
    <>
      <FavoriteShows />
      <SearchBar />
      <ShowList items={showItems} />
      {filteredShows.length === 0 && (
        <PaginationControls
          currentLocalPage={currentLocalPage}
          onPageChange={handlePageClick}
        />
      )}
    </>
  );
};

export default HomePage;
