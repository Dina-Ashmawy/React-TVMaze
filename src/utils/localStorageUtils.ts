/**
 * Sets a value in the localStorage for the specified key.
 * @param {string} key - The key under which to store the value.
 * @param {string[]} value - The value to store in localStorage (as a stringified JSON array).
 */
export const setLocalStorageItem = (key: string, value: string[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Retrieves a value from the localStorage for the specified key.
 * @param {string} key - The key for which to retrieve the value.
 * @returns {string[] | null} The parsed value from localStorage, or null if not found or on error.
 */
export const getLocalStorageItem = (key: string): string[] | null => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as string[]) : null;
};
