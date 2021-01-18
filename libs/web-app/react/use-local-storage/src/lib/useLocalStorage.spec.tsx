// import React from 'react';

import { act,renderHook } from '@testing-library/react-hooks';

import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  it('store key value in localStorage', () => {
    const key = 'unitTest';
    const defaultValue = 'unitTesting';
    const { result } = renderHook(() => useLocalStorage(key, defaultValue));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [keyValue, setKeyValue] = result.current;

    expect(keyValue).toEqual(defaultValue);
    const valueFromLocalStorage = JSON.parse(localStorage.getItem(key));
    expect(valueFromLocalStorage).toEqual(keyValue);
  });

  it('update localStorage when we call setter', () => {
    const key = 'unitTest';
    const defaultValue = 'unitTesting';
    const { result } = renderHook(() => useLocalStorage(key, defaultValue));
    const keyValue = result.current[0];

    expect(keyValue).toEqual(defaultValue);
    act(() => {
      result.current[1]('newValue');
    });
    expect(result.current[0]).toEqual('newValue');
  });
});
