import { createSlice } from '@reduxjs/toolkit';

export interface NavbarStateProps {
  isActive: string;
  anchorStyle: {
    top: number;
  };
}

const initialState: NavbarStateProps = {
  isActive: 'true',
  anchorStyle: {
    top: 0,
  },
};

const navbarReducer = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    changeActive: (state: NavbarStateProps, action): void => {
      state.isActive = action.payload;
    },
    changeAnchorStyle: (state: NavbarStateProps, action): void => {
      state.anchorStyle = action.payload;
    },
  },
});

export const { actions } = navbarReducer;

export default navbarReducer.reducer;
