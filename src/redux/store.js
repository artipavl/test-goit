import { configureStore } from '@reduxjs/toolkit';
import followingSlise from './followingSlise';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'folloving',
  storage,
};

const followingReduser = persistReducer(persistConfig, followingSlise);

export const store = configureStore({
  reducer: {
    folloving: followingReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
