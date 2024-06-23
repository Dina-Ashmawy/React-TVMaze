import React from 'react';
import {
  LastSearchesListWrapper,
  LastSearchesList,
  LastSearchItem,
} from './styled';

interface SearchHistoryProps {
  showHistory: boolean;
  lastSearches: string[];
  handleItemClick: (item: string) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({
  showHistory,
  lastSearches,
  handleItemClick,
}) => {
  return (
    <LastSearchesListWrapper show={showHistory}>
      <LastSearchesList>
        {lastSearches.map((item, index) => (
          <LastSearchItem key={index} onClick={() => handleItemClick(item)}>
            {item}
          </LastSearchItem>
        ))}
      </LastSearchesList>
    </LastSearchesListWrapper>
  );
};

export default SearchHistory;
