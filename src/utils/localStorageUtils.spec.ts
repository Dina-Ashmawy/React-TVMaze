import { getLocalStorageItem, setLocalStorageItem } from './localStorageUtils';

describe('LocalStorageItem', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should set an item in localStorage', () => {
    const key = 'testKey';
    const value = ['bar'];
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    setLocalStorageItem(key, value);

    expect(setItemSpy).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

  it('should retrieve an item from localStorage', () => {
    const key = 'testKey';
    const value = { foo: 'bar' };
    const getItemSpy = jest
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(JSON.stringify(value));

    const result = getLocalStorageItem(key);

    expect(getItemSpy).toHaveBeenCalledWith(key);
    expect(result).toEqual(value);
  });

  it('should return null for non-existent key', () => {
    const key = 'nonExistentKey';
    const getItemSpy = jest
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(null);

    const result = getLocalStorageItem(key);

    expect(getItemSpy).toHaveBeenCalledWith(key);
    expect(result).toBeNull();
  });

  it('should return null for empty string in localStorage', () => {
    const key = 'emptyStringKey';
    const getItemSpy = jest
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue('');

    const result = getLocalStorageItem(key);

    expect(getItemSpy).toHaveBeenCalledWith(key);
    expect(result).toBeNull();
  });
});
