import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  xp: 100,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    gainXp: (state, xpPoints) => {
      state.xp += xpPoints;
    },
  },
});

// Action creators are generated for each case reducer function
export const { gainXp } = playerSlice.actions;

export default playerSlice.reducer;
