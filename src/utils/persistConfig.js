import storage from 'redux-persist/lib/storage'; 

export const persistConfig = {
  favorites: {
    key: 'favorites',
    storage,
    whitelist: ['items'],
  },
  filters: {
    key: 'filters',
    storage,
    whitelist: ['location', 'equipment', 'body']
  },
  transports: {
    key: 'transports',
    storage,
    whitelist: ['items']
  },
};