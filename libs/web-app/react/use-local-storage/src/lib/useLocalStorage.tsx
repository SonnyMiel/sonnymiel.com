/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

/**
 *
 * @param key The key to set in localStorage for this value
 * @param defaultValue The value to use if it is not already in localStorage
 * @param options The serialize and deserialize functions to use (defaults to JSON.stringify and JSON.parse respectively)
 */
function useLocalStorage(
  key: string,
  defaultValue: any = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export { useLocalStorage };
