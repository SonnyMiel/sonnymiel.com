import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '.';

const createStore = () => configureStore({
  reducer: rootReducer,
  middleware:  [...getDefaultMiddleware()],
});

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);