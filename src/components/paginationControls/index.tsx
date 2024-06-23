import React, { useEffect, useState } from 'react';
import { MAX_API_PAGE_NUMBER } from '../../constants';
import { StyledPageButton, StyledPaginationContainer } from './styled';

interface PaginationControlsProps {
  currentLocalPage: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentLocalPage,
  onPageChange,
}) => {
  const [pages, setPages] = useState<JSX.Element[]>([]);

  useEffect(() => {
    renderPageNumbers();
  }, [currentLocalPage]);

  const renderPageNumbers = () => {
    const maxPageButtons = 10; // Maximum number of page buttons to show
    const halfPageRange = Math.floor(maxPageButtons / 2);

    let startPage = Math.max(1, currentLocalPage - halfPageRange);
    let endPage = Math.min(
      startPage + maxPageButtons - 1,
      MAX_API_PAGE_NUMBER * 10,
    );

    if (endPage - startPage < maxPageButtons - 1) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    const newPages = [];
    for (let i = startPage; i <= endPage; i++) {
      newPages.push(
        <StyledPageButton
          key={i}
          onClick={() => onPageChange(i)} // Call onPageChange with i
          active={i === currentLocalPage}
        >
          {i}
        </StyledPageButton>,
      );
    }
    setPages(newPages);
  };

  return <StyledPaginationContainer>{pages}</StyledPaginationContainer>;
};

export default PaginationControls;
