import { StorageKey } from './enums';
//TODO create tests for all of this
export const addLocalItem = (key: StorageKey, value: string) => {
  return localStorage.setItem(key, value);
};

export const fetchLocalItem = (key: StorageKey) => {
  return localStorage.getItem(key);
};

export const deleteLocalItem = (key: StorageKey) => {
  return localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};
