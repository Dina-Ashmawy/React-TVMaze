import { useState, useEffect } from 'react';
import { ITEMS_PER_LOCAL_PAGE, MAX_API_PAGE_NUMBER } from '../constants';
import { Show } from '../interfaces';
import { useFetchShowsQuery } from '../services/tvMazeService';

export const usePagination = () => {
  const [apiPage, setApiPage] = useState<number>(0);
  const [currentLocalPage, setCurrentLocalPage] = useState<number>(1);

  const {
    data: showsData,
    refetch: refetchShows,
    isLoading,
  } = useFetchShowsQuery(apiPage);

  useEffect(() => {
    refetchShows();
  }, [apiPage, refetchShows]);

  const handlePageClick = async (localPageNumber: number) => {
    const requiredApiPage = Math.floor((localPageNumber - 1) / 10);
    if (requiredApiPage <= MAX_API_PAGE_NUMBER && requiredApiPage !== apiPage) {
      setApiPage(requiredApiPage);
    }
    setCurrentLocalPage(localPageNumber);
  };

  const getLocalPageItems = (localPageNumber: number): Show[] => {
    const localPageIndex = (localPageNumber - 1) % 10;
    const startIndex = localPageIndex * ITEMS_PER_LOCAL_PAGE;
    const endIndex = startIndex + ITEMS_PER_LOCAL_PAGE;
    const localPageItems = showsData?.slice(startIndex, endIndex);
    return localPageItems ?? [];
  };

  return {
    currentLocalPage,
    handlePageClick,
    getLocalPageItems,
    isLoading,
  };
};
