import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

export const userStateSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logUserIn } = userStateSlice.actions;

export default userStateSlice.reducer;
