import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  isShown: boolean;
}

const initialState: SidebarState = {
  isShown: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    show: (state) => {
      state.isShown = true;
    },
    hide: (state) => {
      state.isShown = false;
    },
  },
});

export const { show, hide } = sidebarSlice.actions;

export default sidebarSlice.reducer;
