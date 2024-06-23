import { getSessionItem, setSessionItem } from './sessionStorageUtils';

describe('SessionStorage', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('should set a value in sessionStorage', () => {
    const key = 'testKey';
    const value = 'testValue';

    setSessionItem(key, value);

    expect(sessionStorage.getItem(key)).toBe(value);
  });

  it('should retrieve a value from sessionStorage', () => {
    const key = 'testKey';
    const value = 'testValue';
    sessionStorage.setItem(key, value);
    const result = getSessionItem(key);
    expect(result).toBe(value);
  });

  it('should return null for non-existent key', () => {
    const key = 'nonExistentKey';
    const result = getSessionItem(key);
    expect(result).toBeNull();
  });
});
