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
  import { configureStore } from '@reduxjs/toolkit';
  import { persistConfig } from '../utils/persistConfig.js';
import { favoriteReducer } from './favorites/slice.js';
import { filterReducer } from './filters/slice.js';
import { transportsReducer } from './transports/slice.js';
  const rootReducer = {
    favorites: persistReducer(persistConfig.favorites, favoriteReducer),
    filters: persistReducer(persistConfig.filters, filterReducer),
    transports: persistReducer(persistConfig.transports, transportsReducer)
  }
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignoredActionPaths: ['payload', 'meta.arg'],
          },
        }),
  })
  export default store;
  export const persistor = persistStore(store);