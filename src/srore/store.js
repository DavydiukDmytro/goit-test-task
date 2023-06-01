import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { followingListReduser } from './followingList/followingListSlice';
import { usersReducer } from './users/usersSlice';
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
  key: 'auth',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistedReducer = persistReducer(persistConfig, followingListReduser);

export const store = configureStore({
  reducer: { users: usersReducer, followingList: persistedReducer },
  middleware,
});

export const persistor = persistStore(store);
