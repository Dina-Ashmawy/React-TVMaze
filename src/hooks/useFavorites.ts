import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFavoriteShows } from '../redux/showsSlice';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../utils/localStorageUtils';

interface FavoritesHook {
  favorites: string[];
  toggleFavorite: (showName: string) => void;
}

const useFavorites = (): FavoritesHook => {
  const dispatch = useDispatch();

  let storedFavorites: string[] = getLocalStorageItem('favorites') || [];

  const updateFavorites = (newFavorites: string[]) => {
    storedFavorites = newFavorites;
    setLocalStorageItem('favorites', storedFavorites);
    dispatch(setFavoriteShows(storedFavorites));
  };

  const toggleFavorite = (showName: string) => {
    let storedFavorites: string[] = getLocalStorageItem('favorites') || [];
    const isFavorite = storedFavorites.includes(showName);

    if (isFavorite) {
      const updatedFavorites = storedFavorites.filter(
        (item) => item !== showName,
      );
      updateFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...storedFavorites, showName];
      updateFavorites(updatedFavorites);
    }
  };

  useEffect(() => {
    dispatch(setFavoriteShows(storedFavorites));
  }, []);

  return { favorites: storedFavorites, toggleFavorite };
};

export default useFavorites;
