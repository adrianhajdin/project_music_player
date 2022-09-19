import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
