import { combineReducers } from '@reduxjs/toolkit';

import navbar from './navbar';

const rootReducer = combineReducers({
  navbar,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
