import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './slice/gameState';
import userReducer from './slice/userState';
import playerReducer from './slice/playerState';

export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    player: playerReducer,
  },
});
