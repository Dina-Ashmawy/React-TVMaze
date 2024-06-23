import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionItem, setSessionItem } from '../../utils/sessionUtils';
import {
  StyledInput,
  StyledSearchBarWrapper,
  StyledContainer,
  StyledSearchButton,
} from './styled';
import { MAX_SEARCHES } from '../../constants';
import { StyledErrorMessage, StyledLoadingMessage } from '../../gloablStyles';
import { useFetchSearchShowsQuery } from '../../services/tvMazeService';
import { selectSearchTerm, setSearchTerm } from '../../redux/searchSlice';
import SearchHistory from '../searchHistory';
import { setFilteredShows } from '../../redux/showsSlice';

const SearchBar: React.FC = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [lastSearches, setLastSearches] = useState<string[]>([]);
  const [skipQuery, setSkipQuery] = useState<boolean>(true);

  const {
    data: searchResults,
    isLoading,
    isError,
  } = useFetchSearchShowsQuery(searchTerm, {
    skip: skipQuery,
  });

  useEffect(() => {
    const savedSearches = getSessionItem('searches');
    if (savedSearches) {
      setLastSearches(JSON.parse(savedSearches));
    }
  }, []);

  useEffect(() => {
    if (searchResults) {
      dispatch(setFilteredShows(searchResults));
    }
    setSkipQuery(true);
  }, [searchResults]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      let updatedSearches = lastSearches.filter((item) => item !== searchTerm);
      updatedSearches.unshift(searchTerm);
      if (updatedSearches.length > MAX_SEARCHES) {
        updatedSearches.pop();
      }
      setLastSearches(updatedSearches);
      setSessionItem('searches', JSON.stringify(updatedSearches));

      setShowHistory(false);
    }
  };

  const handleClickSearchButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSkipQuery(false);

    if (searchTerm.trim()) {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
    setShowHistory(true);
  };

  return (
    <StyledContainer>
      <StyledSearchBarWrapper>
        <StyledInput
          placeholder="Search for shows..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowHistory(true)}
        />
        <StyledSearchButton onClick={handleClickSearchButton}>
          Search
        </StyledSearchButton>
      </StyledSearchBarWrapper>
      <SearchHistory
        showHistory={showHistory}
        lastSearches={lastSearches}
        handleItemClick={(item: string) => {
          dispatch(setSearchTerm(item));
          setShowHistory(false);
        }}
      />
      {isLoading && <StyledLoadingMessage>Loading...</StyledLoadingMessage>}
      {isError && <StyledErrorMessage>Error fetching data</StyledErrorMessage>}
    </StyledContainer>
  );
};

export default SearchBar;
