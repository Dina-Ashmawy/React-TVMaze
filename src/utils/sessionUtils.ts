/**
 * Sets a value in sessionStorage with the specified key.
 * @param {string} key - The key under which to store the value in sessionStorage.
 * @param {string} value - The value to store in sessionStorage.
 */
export const setSessionItem = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

/**
 * Retrieves a value from sessionStorage based on the specified key.
 * @param {string} key - The key of the item to retrieve from sessionStorage.
 * @returns {string | null} The value associated with the key in sessionStorage, or null if not found.
 */
export const getSessionItem = (key: string): string | null => {
  return sessionStorage.getItem(key);
};
