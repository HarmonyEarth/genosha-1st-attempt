import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  LevelO: true,
  Level1: false,
  Level2: false,
  Level3: false,
};

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    loadLevel1: (state) => {
      state.LevelO = false;
      state.Level1 = true;
      state.Level2 = false;
      state.Level3 = false;
    },
    loadLevel2: (state) => {
      state.LevelO = false;
      state.Level1 = false;
      state.Level2 = true;
      state.Level3 = false;
    },
    loadLevel3: (state) => {
      state.LevelO = false;
      state.Level1 = false;
      state.Level2 = false;
      state.Level3 = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadLevel1, loadLevel2, loadLevel3 } = gameStateSlice.actions;

export default gameStateSlice.reducer;
