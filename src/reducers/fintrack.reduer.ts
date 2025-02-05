import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isOpenMenu: false,
};

const fintrackSlice = createSlice({
  name: 'fintrack',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isOpenMenu = !state.isOpenMenu;
    },
  },
});

export const {toggleMenu} = fintrackSlice.actions;

export default fintrackSlice.reducer;
